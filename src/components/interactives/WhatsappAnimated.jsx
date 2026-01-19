import React, { useState } from 'react'
import content from '../../content/content'
import { getWhatsappLink } from '../util/WhatsappLink'
import contentLp01 from '../../content/contentLp01'

export default function WhatsappAnimated({ modal = false }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [nomeErro, setNomeErro] = useState('')
  const [telefoneErro, setTelefoneErro] = useState('')
  const [formErro, setFormErro] = useState('')
  const [loading, setLoading] = useState(false)

  const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`

  const handleOpenModal = (e) => {
    if (modal === true) {
      e.preventDefault()
      setIsModalOpen(true)
    }
  }

  const handleNomeChange = (e) => {
    const valor = e.target.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, '')
    setNome(valor)

    if (valor.trim() === '') {
      setNomeErro('')
      return
    }

    if (valor.trim().length < 3) {
      setNomeErro('Digite pelo menos 3 letras')
    } else {
      setNomeErro('')
    }
  }

  const handleTelefoneChange = (e) => {
    let valor = e.target.value.replace(/\D/g, '')
    valor = valor.slice(0, 11)

    if (valor.length >= 1) valor = '(' + valor
    if (valor.length >= 3) valor = valor.slice(0, 3) + ') ' + valor.slice(3)
    if (valor.length >= 10) valor = valor.slice(0, 10) + '-' + valor.slice(10)

    setTelefone(valor)

    const soNumeros = valor.replace(/\D/g, '')
    if (soNumeros.length === 0) {
      setTelefoneErro('')
      return
    }

    if (soNumeros.length < 11) {
      setTelefoneErro('Telefone incompleto')
    } else {
      setTelefoneErro('')
    }
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
      console.log('Erro ao enviar:', error)
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

    const linkWhats = getWhatsappLink()

    const novaAba = window.open(linkWhats, '_blank')

    setIsModalOpen(false)

    setLoading(true)

    await enviarParaPlanilha()

    setLoading(false)
  }

  return (
    <>
      {/* BOTÃO FLUTUANTE */}
      <a
        href={modal ? '#' : whatsappContactLink}
        target="_blank"
        onClick={handleOpenModal}
        className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#075e54]"
        aria-label="WhatsApp para contato"
      >
        <div className="absolute z-10 top-0 left-0 w-full h-full rounded-full bg-[#075e54] animate-ping"></div>
        <div className="relative z-20">
          <svg
            fill="#fff"
            height="24px"
            width="24px"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 308 308"
            stroke="#fff"
          >
            <path d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z" />
            <path d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z" />
          </svg>
        </div>
      </a>

      {/* MODAL */}
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

              {formErro && <p className="text-sm text-red-600">{formErro}</p>}

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
