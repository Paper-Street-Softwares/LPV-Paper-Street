import SectionArea from '../../sectionElements/SectionArea'
import SectionWrapper from '../../sectionElements/SectionWrapper'
import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import { X, MoveRight } from 'lucide-react'
import 'primereact/resources/themes/lara-light-cyan/theme.css'

export default function FooterLP() {
  const [visible, setVisible] = useState(false)
  const abrirModal = () => {
    setVisible(true)
  }
  return (
    <div className="bg-bgFixedLight">
      <SectionArea paddingTopAndBottom={false}>
        <SectionWrapper>
          <div className="mb-6">
            <div
              className={`mt-12 text-md desktop1:text-paragraph5 flex flex-col desktop1:flex-row gap-2 tablet2:gap-3 opacity-75 items-center text-center font-secondFont`}
            >
              <p>Todos os direitos reservados</p>
              <span className="hidden desktop1:flex">•</span>
              <p>
                Desenvolvido com excelência por{' '}
                <a
                  target="_blank"
                  href="https://paperstreet.com.br"
                  className="underline"
                >
                  Paper Street
                </a>
              </p>
              <span className="hidden desktop1:flex">•</span>
              <button
                onClick={abrirModal}
                aria-label="Abre um Modal com os termos da Política de privacidade"
                className="underline cursor-pointer outline-none w-fit mx-auto"
              >
                Políticas de privacidade
              </button>{' '}
            </div>

            <p className="font-secondFont desktop1:text-sm text-center mt-4 opacity-75">
              Esse site não faz parte do Google LLC nem do Facebook Inc. e não
              oferecemos nenhum tipo de serviço oficial do governo.
            </p>
            <Dialog
              className="font-secondFont"
              headerClassName="p-6"
              header={
                <h1 className="text-3xl font-bold">Política de Privacidade</h1>
              }
              closeIcon={<X size={20} />}
              visible={visible}
              onHide={() => setVisible(false)}
              style={{ width: '50vw' }}
              breakpoints={{
                '4000px': '641px',
                '1024px': '641px',
                '641px': '85vw',
              }}
            >
              <div className="mx-auto leading-relaxed text-gray-900 phone3:max-w-3xl tablet1:px-6 font-secondFont">
                <h2 className="mb-3 text-lg font-semibold">
                  Informações Importantes
                </h2>

                <p className="mb-4">
                  Esta Política de Privacidade descreve como coletamos,
                  utilizamos, armazenamos e compartilhamos informações pessoais
                  de usuários de nossos serviços, em conformidade com a Lei
                  Geral de Proteção de Dados (LGPD) - Lei nº 13.709/2018.
                </p>

                <p className="mb-4">
                  Nos comprometemos a proteger a privacidade e os dados pessoais
                  de todos os usuários, garantindo transparência e segurança em
                  todas as etapas de tratamento.
                </p>

                <div className="my-8 border-t-2 border-black"></div>

                <h2 className="mb-4 text-xl font-semibold">Definições</h2>

                <ul className="mb-6 ml-6 space-y-2 list-disc">
                  <li>
                    <strong>
                      Autoridade Nacional de Proteção de Dados (ANPD):
                    </strong>{' '}
                    órgão responsável pela fiscalização e aplicação da LGPD.
                  </li>

                  <li>
                    <strong>Base Legal:</strong> fundamento jurídico que
                    autoriza o tratamento de dados pessoais (como consentimento,
                    execução de contrato, obrigação legal ou legítimo
                    interesse).
                  </li>

                  <li>
                    <strong>Consentimento:</strong> manifestação livre e
                    informada do titular que autoriza o tratamento de seus dados
                    pessoais para uma finalidade específica.
                  </li>

                  <li>
                    <strong>Dado Pessoal:</strong> qualquer informação que
                    identifique ou possa identificar uma pessoa natural (ex.:
                    nome, CPF, e-mail, telefone, IP, localização, etc.).
                  </li>

                  <li>
                    <strong>Dado Pessoal Sensível:</strong> dado que revele
                    origem racial, convicção religiosa, opinião política, dado
                    referente à saúde, vida sexual, dado genético ou biométrico.
                  </li>

                  <li>
                    <strong>Titular:</strong> pessoa natural a quem se referem
                    os dados pessoais tratados.
                  </li>

                  <li>
                    <strong>Tratamento:</strong> qualquer operação realizada com
                    dados pessoais, como coleta, armazenamento, uso,
                    compartilhamento ou exclusão.
                  </li>

                  <li>
                    <strong>Legítimo Interesse:</strong> quando o tratamento é
                    necessário para atender a interesses legítimos do
                    controlador, sem ferir direitos e liberdades fundamentais do
                    titular.
                  </li>

                  <li>
                    <strong>Segurança:</strong> medidas técnicas e
                    administrativas adotadas para proteger os dados de acessos
                    não autorizados, vazamentos ou destruição acidental.
                  </li>
                </ul>

                <p className="mb-4">
                  <strong>Transparência:</strong> direito do titular de receber
                  informações claras e acessíveis sobre o uso de seus dados.
                </p>

                <div className="my-8 border-t-2 border-black"></div>

                <h2 className="mb-4 text-xl font-semibold">
                  Direitos dos Titulares
                </h2>

                <p className="mb-3">
                  Os titulares de dados pessoais têm direito a:
                </p>

                <ul className="mb-6 ml-6 space-y-2 list-disc">
                  <li>Confirmar se seus dados são tratados;</li>
                  <li>
                    Acessar, corrigir, atualizar ou solicitar a exclusão de seus
                    dados;
                  </li>
                  <li>Revogar o consentimento a qualquer momento;</li>
                  <li>Solicitar portabilidade ou anonimização dos dados;</li>
                  <li>Opor-se ao tratamento quando considerar irregular.</li>
                </ul>

                <p className="mb-4">
                  As solicitações podem ser feitas por meio dos canais de
                  contato disponibilizados pela empresa.
                </p>

                <div className="my-8 border-t-2 border-black"></div>

                <h2 className="mb-4 text-xl font-semibold">
                  Coleta e Uso de Dados Pessoais
                </h2>

                <p className="mb-3">
                  Podemos coletar dados pessoais por meio de:
                </p>

                <ul className="mb-6 ml-6 space-y-2 list-disc">
                  <li>
                    Formulários de contato e cadastro (nome, e-mail, telefone,
                    endereço, CPF, entre outros);
                  </li>
                  <li>
                    Navegação no site, incluindo endereço IP, localização
                    geográfica, tipo de navegador, sistema operacional e tempo
                    de visita;
                  </li>
                  <li>
                    Transações financeiras, quando houver compra de produtos ou
                    contratação de serviços;
                  </li>
                  <li>
                    Interações com o suporte ou atendimento, para aprimorar a
                    experiência do usuário e a qualidade do serviço.
                  </li>
                </ul>

                <p className="mb-3">Esses dados são utilizados para:</p>

                <ul className="mb-6 ml-6 space-y-2 list-disc">
                  <li>Operar, manter e melhorar nossos serviços;</li>
                  <li>Personalizar a experiência do usuário;</li>
                  <li>Cumprir obrigações legais e contratuais;</li>
                  <li>
                    Realizar comunicações e campanhas de marketing, mediante
                    consentimento;
                  </li>
                  <li>
                    Garantir segurança, prevenção a fraudes e cumprimento de
                    exigências legais.
                  </li>
                </ul>

                <div className="my-8 border-t-2 border-black"></div>

                <h2 className="mb-4 text-xl font-semibold">
                  Cookies e Tecnologias de Rastreamento
                </h2>

                <p className="mb-4">
                  Nosso site pode utilizar cookies e tecnologias semelhantes
                  para melhorar a navegação e compreender como os usuários
                  interagem com o conteúdo. O uso de cookies não estritamente
                  necessários dependerá do consentimento do usuário, que poderá
                  ser configurado ou revogado a qualquer momento em seu
                  navegador.
                </p>

                <div className="my-8 border-t-2 border-black"></div>

                <h2 className="mb-4 text-xl font-semibold">
                  Compartilhamento e Transferência de Dados
                </h2>

                <p className="mb-3">Podemos compartilhar dados pessoais com:</p>

                <ul className="mb-6 ml-6 space-y-2 list-disc">
                  <li>
                    Parceiros e prestadores de serviço, que auxiliam na operação
                    técnica, hospedagem, marketing ou suporte;
                  </li>
                  <li>Autoridades públicas, quando houver obrigação legal;</li>
                  <li>Instituições financeiras, em transações de pagamento.</li>
                </ul>

                <p className="mb-4">
                  Em caso de transferência internacional de dados, serão
                  adotadas medidas para garantir que o tratamento esteja em
                  conformidade com a LGPD e com níveis adequados de proteção.
                </p>

                <div className="my-8 border-t-2 border-black"></div>

                <h2 className="mb-4 text-xl font-semibold">
                  Armazenamento e Retenção dos Dados
                </h2>

                <p className="mb-4">
                  Os dados pessoais são armazenados apenas pelo tempo necessário
                  para cumprir as finalidades para as quais foram coletados ou
                  conforme exigido por lei. Após o período de retenção, os dados
                  são eliminados de forma segura, respeitando normas técnicas e
                  regulatórias.
                </p>

                <div className="my-8 border-t-2 border-black"></div>

                <h2 className="mb-4 text-xl font-semibold">
                  Segurança da Informação
                </h2>

                <p className="mb-4">
                  Adotamos medidas técnicas, físicas e administrativas adequadas
                  para proteger os dados pessoais contra acesso não autorizado,
                  perda, alteração, destruição ou divulgação indevida. Embora
                  nenhuma medida seja totalmente infalível, buscamos
                  constantemente aprimorar nossas práticas de segurança.
                </p>

                <div className="my-8 border-t-2 border-black"></div>

                <h2 className="mb-4 text-xl font-semibold">
                  Alterações nesta Política
                </h2>

                <p className="mb-4">
                  Esta Política de Privacidade poderá ser atualizada
                  periodicamente, conforme alterações legais ou melhorias em
                  nossos processos. Recomendamos que o usuário revise este
                  documento regularmente para manter-se informado sobre como
                  protegemos suas informações.
                </p>

                <div className="my-8 border-t-2 border-black"></div>

                <h2 className="mb-4 text-xl font-semibold">Contato</h2>

                <p>
                  Em caso de dúvidas, solicitações ou exercício de direitos
                  relacionados a dados pessoais, entre em contato pelo canal de
                  comunicação indicado no site.
                </p>
              </div>
            </Dialog>
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  )
}
