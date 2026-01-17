import React, { useState } from 'react'
import CustomTag from '../util/CustomTag'
import MotionDivDownToUp from '../animation/MotionDivDownToUp'
import { getWhatsappLink } from '../util/WhatsappLink'
import contentLp01 from '../../content/contentLp01'

export default function Button({
  icon,
  label,
  onClick,
  buttonLink,
  className,
  textclassName,
  labelColor,
  size,
  sizeFeatures,
  gap,
  id,
  removeTarget,
  removeAnchor,
  tagName,
  color,
  animation = true,
  colorMode,
  reflexAnimation = true,
  conversao = true,

}) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [nomeErro, setNomeErro] = useState('')
  const [telefoneErro, setTelefoneErro] = useState('')
  const [formErro, setFormErro] = useState('')

  // NOVO ESTADO PARA LOADING
  const [loading, setLoading] = useState(false)

  let textSizeClass = ''
  if (size === 'small') {
    sizeFeatures = 'px-[18px] py-[10px]'
    textSizeClass = 'text-paragraph3 font-secondFont'
    gap = 'gap-[10px]'
  } else {
    sizeFeatures = 'px-[30px] py-[16px]'
    textSizeClass = 'text-paragraph2 tablet1:text-paragraph4 font-secondFont'
    gap = 'gap-[20px]'
  }

  const Animation = animation ? MotionDivDownToUp : 'div'
  const CustomTagName = removeAnchor ? 'div' : tagName || 'a'

  const buttonColors = {
    dark: 'text-labelButtons',
    light: 'text-labelButtons',
    default: 'text-labelButtons',
  }
  const buttonColor = buttonColors[colorMode] || buttonColors.default

  const shouldRedirectToWhatsapp = !buttonLink && !onClick
  const finalButtonLink = shouldRedirectToWhatsapp
    ? getWhatsappLink()
    : buttonLink

  const handleOpenModal = (e) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  const handleNomeChange = (e) => {
    const valor = e.target.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, '')
    setNome(valor)

    if (valor.trim() === '') {
      setNomeErro('')
      return
    }

    if (valor.trim().length < 3) setNomeErro('Digite pelo menos 3 letras')
    else setNomeErro('')
  }

  const handleTelefoneChange = (e) => {
    let valor = e.target.value.replace(/\D/g, '')
    valor = valor.slice(0, 11)

    if (valor.length >= 1) valor = '(' + valor
    if (valor.length >= 3) valor = valor.slice(0, 3) + ') ' + valor.slice(3)
    if (valor.length >= 10) valor = valor.slice(0, 10) + '-' + valor.slice(10)

    setTelefone(valor)

    const somenteNumeros = valor.replace(/\D/g, '')

    if (somenteNumeros.length === 0) {
      setTelefoneErro('')
      return
    }

    if (somenteNumeros.length < 11) setTelefoneErro('Telefone incompleto')
    else setTelefoneErro('')
  }

  const enviarParaPlanilha = async () => {
    try {
      await fetch(
        'https://cors-proxy-seven-beige.vercel.app/api/proxy?url=' +
          encodeURIComponent(
            'https://script.google.com/macros/s/AKfycbwWTNo_3L1kz9xffgOqa0udGzvJpD8Y2nDzyh5aZNYKjSfL_KqmXA1J7MuR0KCREHvZ4w/exec',
          ),
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nome,
            email: telefone,
            origem: contentLp01.origem,
          }),
        },
      )
    } catch (error) {
      console.log('Erro ao enviar para planilha:', error)
    }
  }

  const handleSubmit = async () => {
    const telefoneNumerico = telefone.replace(/\D/g, '')

    let erro = false

    if (nome.trim() === '') {
      setNomeErro('Esse campo não pode ficar vazio')
      erro = true
    }

    if (telefoneNumerico === '') {
      setTelefoneErro('Esse campo não pode ficar vazio')
      erro = true
    }

    if (erro) return

    if (nome.trim().length < 2 || telefoneNumerico.length < 11) {
      setFormErro('Preencha os campos corretamente antes de prosseguir')
      return
    }

    setFormErro('')

    gtag('event', 'conversion', {
      send_to: 'AW-17668069100/wlMgCM_7kecbEOyt5ehB',
      value: 1.0,
      currency: 'BRL',
    })

    const novaAba = window.open(finalButtonLink, '_blank')

    setIsModalOpen(false)

    setLoading(true)

    await enviarParaPlanilha()

    setLoading(false)
  }

  const shineThemes = {
    light: 'bg-white/20',
    dark: 'bg-white/10',
  }

  const shineColor = shineThemes.dark || shineThemes.light

  return (
    <>
      <CustomTag
        tagName={CustomTagName}
        {...(removeTarget ? {} : { target: '_blank' })}
        {...(removeAnchor ? {} : { href: '#' })}
        onClick={handleOpenModal}
        className="inline-block max-w-full w-fit"
      >
        {animation ? (
          conversao ? (
            <MotionDivDownToUp className="w-auto">
              <button
                id={id}
                onClick={clickBotãoCTA}
                className={`flex ${className} ${sizeFeatures} relative shadow-custom-opacityButton shadow-shadowHero/0 rounded-[100px] overflow-hidden  ${
                  color || 'bg-buttonColor'
                } flex-row items-center justify-around transition text-labelButtons desktop1:hover:scale-110`}
              >
                {reflexAnimation && (
                  <span
                    className={`
              absolute top-0 left-0 w-full h-full 
              ${shineColor}
              animate-shine-loop 
              z-0
              pointer-events-none
            `}
                  />
                )}
                <div
                  className={`flex items-center text-center ${gap} min-h-[24px]`}
                >
                  {icon && <div className={`${buttonColor}`}>{icon}</div>}
                  <p
                    className={`flex items-center  ${textSizeClass} ${
                      labelColor || buttonColor
                    } ${textclassName}`}
                  >
                    {label}
                  </p>
                </div>
              </button>
            </MotionDivDownToUp>
          ) : (
            <MotionDivDownToUp className="w-auto">
              <button
                id={id}
                className={`flex ${className} ${sizeFeatures} relative shadow-custom-opacityButton shadow-shadowHero/0 rounded-[100px] overflow-hidden  ${
                  color || 'bg-buttonColor'
                } flex-row items-center justify-around transition text-labelButtons desktop1:hover:scale-110`}
              >
                {reflexAnimation && (
                  <span
                    className={`
              absolute top-0 left-0 w-full h-full 
              ${shineColor}
              animate-shine-loop 
              z-0
              pointer-events-none
            `}
                  />
                )}
                <div
                  className={`flex items-center text-center ${gap} min-h-[24px]`}
                >
                  {icon && <div className={`${buttonColor}`}>{icon}</div>}
                  <p
                    className={`flex items-center  ${textSizeClass} ${
                      labelColor || buttonColor
                    } ${textclassName}`}
                  >
                    {label}
                  </p>
                </div>
              </button>
            </MotionDivDownToUp>
          )
        ) : (
          <div className="w-auto">
            <button
              id={id}
              className={`flex ${className} ${sizeFeatures} shadow-custom-opacityButton shadow-shadowHero/20 bg-buttonColor flex-row items-center justify-around transition ${color} text-labelButtons desktop1:hover:scale-110`}
            >
              <div
                className={`flex items-center text-center ${gap} min-h-[24px]`}
              >
                {icon && <div className={`${buttonColor}`}>{icon}</div>}
                <p
                  className={`flex items-center ${textSizeClass} ${
                    labelColor || buttonColor
                  } ${textclassName}`}
                >
                  {label}
                </p>
              </div>
            </button>
          </div>
        )}
      </CustomTag>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999]">
          <div className="bg-white w-[90%] max-w-[420px] p-6 rounded-[20px] shadow-xl relative">
            <button
              className="absolute text-xl font-bold top-3 right-3"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>

            <h2 className="mb-4 text-lg font-bold font-secondFont">
              Preencha para receber atendimento agora:
            </h2>

            <div className="flex flex-col gap-4 font-secondFont">
              <div className="flex flex-col">
                <label className="font-medium">Nome:</label>
                <input
                  type="text"
                  value={nome}
                  onChange={handleNomeChange}
                  className="px-3 py-2 border rounded"
                />
                {nomeErro && (
                  <p className="mt-1 text-sm text-red-600">{nomeErro}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label className="font-medium">Telefone:</label>
                <input
                  type="text"
                  value={telefone}
                  onChange={handleTelefoneChange}
                  className="px-3 py-2 border rounded"
                />
                {telefoneErro && (
                  <p className="mt-1 text-sm text-red-600">{telefoneErro}</p>
                )}
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="py-4 text-white bg-[#075e54] rounded-[100px] hover:scale-105 transition-all"
              >
                {loading ? (
                  'Aguarde...'
                ) : (
                  <p className="flex items-center justify-center gap-4">
                    {' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                    </svg>
                    Receber atendimento
                  </p>
                )}
              </button>

              {formErro && <p className="text-sm text-red-600">{formErro}</p>}

              <p className="text-center text-paragraph2">
                Você será atendido(a) por um especialista no WhatsApp
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
