import React from "react";
import content from "../content/content";
import Button from "../components/interactives/Button";
import { useNavigate } from "react-router-dom";

function Politica() {
  const navigate = useNavigate();

  return (
    <div className="w-[90%] desktop1:w-[45%] text-justify m-auto py-[50px] flex flex-col gap-10">
      <img
        src={content.texts.navbar.logo.img}
        alt=""
        className="w-[300px] invert"
      />
      <div>
        <div className="flex flex-col gap-3 mb-5">
          <h1 className="flex font-bold">Políticas de Privacidade</h1>
          <p className="mt-2">
            1. Informações Importantes
            <br /> Esta Política de Privacidade descreve como coletamos,
            utilizamos, armazenamos e compartilhamos suas informações pessoais.
            Em conformidade com a Lei Geral de Proteção de Dados (LGPD) - Lei nº
            13.709, de 14 de agosto de 2018,{" "}
            <span className="font-bold">
              Paper Street - Desenvolvimento Web{" "}
            </span>
            se compromete a proteger a privacidade e os dados pessoais dos
            usuários de nossos serviços.
          </p>
        </div>
        <hr className="mb-5" />
        <div className="flex flex-col gap-3 mb-5">
          <span className="font-bold">Definições</span>
          <p className="">
            Definições Autoridade Nacional de Proteção de Dados (ANPD): Órgão
            responsável pela fiscalização e orientação da aplicação da LGPD,
            além da aplicação de sanções administrativas em caso de violações.
          </p>
          <p className="mt-3">
            {" "}
            Base Legal para Tratamento: Permissões para o tratamento de dados
            pessoais conforme a LGPD, incluindo consentimento do titular,
            cumprimento de obrigações legais ou regulatórias, execução de
            contratos, análise de crédito, e interesses legítimos de{" "}
            <span className="font-bold">
              Paper Street - Desenvolvimento Web
            </span>{" "}
            ou do titular.
          </p>
          <p className="mt-3">
            {" "}
            Consentimento: Manifestação livre, informada e inequívoca pela qual
            o titular concorda com o tratamento de seus dados pessoais para uma
            finalidade determinada.
          </p>
          <p className="mt-3">
            Dado Pessoal: Qualquer dado relacionado à pessoa natural
            identificada ou identificável, tais como: IP, geolocalização, nome,
            RG, CPF, endereço, telefone, conta bancária, dados de veículo,
            dentre outros.
          </p>
          <p className="mt-3">
            Dado Pessoal Sensível: Dado pessoal que apresente origem racial ou
            étnica, convicção religiosa, opinião política, filiação a sindicato,
            dado referente à saúde ou à vida sexual, dado genético ou
            biométrico.
          </p>
          <p className="mt-3">
            Finalidade: Razão ou motivação para que seja realizado o tratamento
            de dados pessoais.
          </p>
          <p className="mt-3">
            Legítimo Interesse: Tratamento de dados realizado pelo controlador,
            em razão de um interesse seu, de outras empresas ou da sociedade,
            sem que o tratamento afete os direitos e liberdades individuais do
            titular.
          </p>
          <p className="mt-3">
            Lei Geral de Proteção de Dados (LGPD): Lei nº 13.709, de 14 de
            agosto de 2018.
          </p>
          <p className="mt-3">
            Livre Acesso: Direito do titular de ter acesso a todas as
            informações referentes ao tratamento de seus dados pessoais.
          </p>
          <p className="mt-3">
            Oposição: Direito do titular de não querer que seu dado seja
            tratado. Esse direito pode ser exercido em determinadas situações
            específicas.
          </p>
          <p className="mt-3">
            Segurança: Utilização de medidas técnicas e administrativas aptas a
            proteger os dados pessoais de acessos não autorizados e de situações
            acidentais ou ilícitas de destruição, perda, alteração, comunicação
            ou difusão.
          </p>
          <p className="mt-3">
            Tratamento: Toda operação realizada com o dado pessoal, tais como:
            coleta, produção, recepção, classificação, utilização, acesso,
            reprodução, transmissão, distribuição, processamento, arquivamento,
            armazenamento, eliminação, avaliação, controle de informação,
            comunicação, transferência, difusão ou extração.
          </p>
          <p className="mt-3">
            Titular: Pessoa natural a que se referem os dados pessoais que são
            objeto de tratamento.
          </p>
          <p className="mt-3">
            Transparência: Garantia, aos titulares, de informações claras,
            precisas e facilmente acessíveis sobre a realização do tratamento e
            respectivos agentes de tratamento, observados os segredos comercial
            e industrial.
          </p>
        </div>
        <hr className="mb-5" />
        {/* Resumo dos Direitos da Política de Privacidade */}
        <div className="flex flex-col gap-3 mb-5">
          <h1 className="flex font-bold text-title2">
            Resumo dos Direitos da Política de Privacidade
          </h1>
          <p className="mt-2">
            Minimização de Dados
            <br /> Coletamos apenas os dados pessoais necessários para a
            funcionalidade do produto.
            <br />
            <br />
            Direito dos Titulares
            <br /> Garantimos ao usuário o direito de acesso, correção e
            exclusão dos dados tratados.
            <br />
            <br />
            Prazo de Retenção
            <br /> Os dados coletados são tratados pelo prazo máximo de 5 anos,
            e em caso de exclusão de conta do usuário, pelo prazo máximo de 1
            ano.
            <br />
            <br />
            Coleta de Dados de Terceiros
            <br /> As ferramentas de coleta de dados são as indicadas nesta
            Política.
          </p>
        </div>
        <hr className="mb-5" />
        {/* Introducao */}
        <div className="flex flex-col gap-3 mb-5">
          <p className="">
            2. Introdução
            <br /> Temos o compromisso de proteger a privacidade dos usuários de
            nossos Serviços.
          </p>
          <p className="mt-2">
            Esta política se aplica quando atuamos como um controlador de dados
            em relação aos dados pessoais de usuários de nossos Serviços.
          </p>
          <p className="mt-2">
            Nós usamos cookies em nosso site. Na medida em que esses cookies não
            sejam estritamente necessários para a navegação em nosso site e/ou o
            fornecimento de nossos Serviços, solicitaremos que você concorde com
            o uso de cookies quando visitar o nosso site pela primeira vez.
          </p>
          <p className="mt-2">
            Nossos sites incorporam funcionalidades que lhe permitem configurar
            suas preferências sobre seus dados pessoais e sua privacidade, os
            chamados controles de privacidade. Ao usar os controles de
            privacidade, você pode especificar como deseja que{" "}
            <span className="font-bold">
              Paper Street - Desenvolvimento Web
            </span>{" "}
            lide com seus dados pessoais.
          </p>
          <p className="mt-2">
            Nesta política, “nós” e “nosso” se referem a{" "}
            <span className="font-bold">
              Paper Street - Desenvolvimento Web
            </span>
            .
          </p>
        </div>
        <hr className="mb-5" />
        {/* Seus Dados Pessoais e como os Utilizamos */}
        <div className="flex flex-col gap-3 mb-5">
          <p className="">
            3. Seus Dados Pessoais e como os Utilizamos
            <br /> Podemos tratar dados referentes ao uso dos nossos sites,
            produtos, serviços de nuvem e aplicativos e por meio da utilização
            destes (“Serviços”). O uso de dados pode incluir seu endereço de IP,
            localização geográfica, tipo e versão de navegador, sistema
            operacional, tempo da visita aos nossos sites (“Uso de Dados”),
            número de utilizações dos Serviços, data da visita, dentre outras. A
            fonte do Uso de Dados é Google Analytics. O Uso de Dados pode ser
            realizado para o propósito de análise de uso dos Serviços, produtos
            e serviços de{" "}
            <span className="font-bold">
              Paper Street - Desenvolvimento Web
            </span>
            . A base legal para o tratamento de tais dados é o legítimo
            interesse de{" "}
            <span className="font-bold">
              Paper Street - Desenvolvimento Web
            </span>
            , como meio de garantir a plena execução e funcionalidades dos
            Serviços.
          </p>
          <p className="mt-3">
            Podemos tratar os dados de seu cadastro nos Serviços (“Dados de
            Cadastro”). Os cadastros podem incluir nome, endereço de e-mail,
            endereço, CPF, telefone, imagem, foto, áudio, entre outros. Os Dados
            de Cadastro podem ser tratados para fins de operação dos Serviços,
            fornecimento de produtos e serviços, garantia da segurança de nossos
            Serviços, produtos e serviços, manutenção de backup de bases de
            dados e comunicação com nossos clientes, incluindo a
            disponibilização e acesso a todas as funcionalidades dos Serviços. A
            base legal para o tratamento de tais dados é o consentimento.
          </p>
          <p className="mt-3">
            Podemos tratar dados a partir de questionamentos que nos sejam
            enviados em relação a atendimento ao consumidor (“Dados de Relação
            do Consumidor”). Os Dados de Questionamentos do Consumidor podem
            incluir detalhes sobre suas perguntas e problemas com produtos e/ou
            serviços e podem ser tratados para fins de oferta de novos produtos
            e/ou serviços, marketing, atualização de processos de resposta e
            melhoria de atendimento ao consumidor. A base legal para o
            tratamento de tais dados é o legítimo interesse de{" "}
            <span className="font-bold">
              Paper Street - Desenvolvimento Web
            </span>{" "}
            e de seus clientes e cumprimento de obrigação legal.
          </p>
          <p className="mt-3">
            Podemos tratar seus dados obtidos a partir de transações financeiras
            realizadas a partir de nossos Serviços, inclusive para aquisição de
            produtos e/ou serviços (“Dados de Transações”). Os Dados de
            Transações podem incluem seu endereço, CPF, dados financeiros,
            bancários e número de cartão de crédito, dentre outros, e são
            tratados para o fornecimento de produtos e/ou serviços, manutenção
            de arquivos, cumprimento de obrigações fiscais. A base legal para o
            tratamento de tais dados é o cumprimento de obrigação legal,
            especificamente legislação fiscal.
          </p>
          <p className="mt-3">
            Podemos tratar seus dados pessoais para o envio de anúncios,
            propagandas e marketing direto, relacionados aos interesses do
            cliente de acordo com suas preferências. A base legal para o
            tratamento de tais dados é o consentimento, bem como legítimo
            interesse do controlador.
          </p>
          <p className="mt-3">
            Em alguns casos, o produto{" "}
            <span className="font-bold">
              Paper Street - Desenvolvimento Web
            </span>{" "}
            poderá captar dados de terceiros do ambiente (“Dados de Terceiros”).
            Os dados podem incluir imagens faciais, gravações, áudio, que podem
            ser classificados como dados pessoais, protegidos por lei. A
            responsabilidade pela proteção dos dados de terceiros, captados a
            partir dos produtos de{" "}
            <span className="font-bold">
              Paper Street - Desenvolvimento Web
            </span>
            , são de inteira responsabilidade do usuário, cabendo a este,
            aplicar todos os meios necessários para a proteção efetiva dos
            dados, especialmente, a configuração dos produtos e de rede para que
            os padrões mínimos de segurança sejam garantidos.{" "}
            <span className="font-bold">
              Paper Street - Desenvolvimento Web
            </span>{" "}
            não é responsável pelo uso ilegal dos dados coletados por intermédio
            de seus produtos, pois inacessível a gestão dos mesmos.
          </p>
        </div>{" "}
        <hr className="mb-5" />
        {/* Transferência de Dados para Terceiros */}
        <div className="flex flex-col gap-3 mb-5">
          <p className="">
            4. Transferência de Dados para Terceiros
            <br /> Podemos divulgar seus dados pessoais a qualquer membro de
            nosso grupo de empresas (isso significa nossas subsidiárias, nossos
            controladores e todas as suas controladas), na medida do
            razoavelmente necessário para as finalidades informadas e de acordo
            com a legislação aplicável, bem como observadas as bases legais de
            tratamento informadas nesta política.
          </p>
          <p className="mt-2">
            Podemos divulgar seus dados pessoais às nossas seguradoras e/ou
            consultores profissionais, na medida do razoavelmente necessário
            para os fins de obter ou manter cobertura de seguro, gerenciar
            riscos, obter aconselhamento profissional ou o ingresso, exercício
            ou defesa em ações administrativas, arbitrais e ou legais. Ademais,
            podemos divulgar seus dados para nossos fornecedores na medida do
            razoavelmente necessário para lhe fornecer nossos produtos e/ou
            serviços e assegurar a segurança na utilização de nossos serviços e
            na utilização de seus dados pessoais, tais como fornecedores,
            serviços de marketing e atendimento ao consumidor, provedores de
            redes e serviços de nuvem.
          </p>
          <p className="mt-2">
            As transações financeiras relacionadas aos nossos serviços e à
            aquisição de nossos produtos e/ou serviços são tratadas por nossos
            provedores de serviços de pagamento, sendo que compartilhamos os
            dados da transação com nossos prestadores de serviços de pagamento
            apenas na extensão necessária para os fins de processar seus
            pagamentos, reembolsar valores e lidar com reclamações e consultas
            relacionadas a essas questões.
          </p>
          <p className="mt-2">
            Além das divulgações específicas de dados pessoais estabelecidas
            nesta Cláusula 4, podemos divulgar seus dados pessoais sempre que
            tal divulgação for necessária para o cumprimento de uma obrigação
            legal e/ou regulatória a qual{" "}
            <span className="font-bold">
              Paper Street - Desenvolvimento Web
            </span>{" "}
            está sujeita, bem como para proteger seus interesses vitais ou os
            interesses vitais de outro titular de dados.
          </p>
          <p className="mt-2">
            <span className="font-bold">
              Paper Street - Desenvolvimento Web
            </span>{" "}
            e outras empresas de seu grupo possuem escritórios e instalações em
            outros países, bem como possuem fornecedores em outros países
            (hospedagem de sites, serviços de nuvem, gateways de pagamento,
            suporte técnico, desenvolvimento, modelagem, customização, entre
            outros). Dessa forma, podemos transmitir seus dados para fora do
            Brasil com vistas aos propósitos indicados acima.{" "}
            <span className="font-bold">
              Paper Street - Desenvolvimento Web
            </span>{" "}
            adota todas as medidas adequadas e celebra os contratos necessários
            com seus fornecedores e escritórios estrangeiros para garantir que o
            tratamento de dados pessoais fora do Brasil seja realizado de acordo
            com a LGPD e em observância às políticas de{" "}
            <span className="font-bold">
              Paper Street - Desenvolvimento Web
            </span>
            .
          </p>
          <p className="mt-2">
            Você reconhece que os dados pessoais que você fornece à{" "}
            <span className="font-bold">
              Paper Street - Desenvolvimento Web
            </span>{" "}
            por meio dos serviços ou de nossos produtos e/ou serviços podem
            estar disponíveis para operadores em todo o mundo.
          </p>
          <p className="mt-2">
            Na medida em que esse acesso global envolva uma transferência de
            dados pessoais para outros países, essas transferências estão
            sujeitas a política de transferência internacional de dados de{" "}
            <span className="font-bold">
              Paper Street - Desenvolvimento Web
            </span>{" "}
            e a mecanismos adequados que fornecem um nível adequado de proteção
            em conformidade com a LGPD.
          </p>
        </div>
        <hr className="mb-5" />
        {/* Armazenamento e Deleção de Dados Pessoais */}
        <div className="flex flex-col gap-3 mb-5">
          <p className="">
            5. Armazenamento e Deleção de Dados Pessoais
            <br /> Os dados pessoais que tratamos para qualquer finalidade não
            devem ser mantidos por mais tempo do que o necessário para tais
            finalidades.
          </p>
          <p className="mt-2">
            Reteremos seus dados pessoais da seguinte maneira:
          </p>
          <p className="mt-2">
            (a) Eventuais dados pessoais, tais como CPF, e-mail, endereço,
            telefone coletados por intermédio do site, serão mantidos por um
            período mínimo de 5 (cinco) anos após a coleta do dado e por um
            período máximo de 10 (dez) anos;
          </p>
          <p className="mt-2">
            (b) Em alguns casos, não é possível especificar com antecedência os
            períodos pelos quais seus dados pessoais serão retidos. Nesses
            casos, determinaremos o período de retenção com base nos seguintes
            critérios, sem prejuízo de outros: (i) existência de lei ou
            regulação específica exigindo prazo determinado para retenção de
            dados; (ii) políticas internas de{" "}
            <span className="font-bold">
              Paper Street - Desenvolvimento Web
            </span>
            ; (iii) existência de processos judiciais, administrativos ou
            arbitrais; e (iv) solicitações de informações realizadas por
            autoridades governamentais.
          </p>
        </div>
        <Button
          label="Voltar"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-left-icon lucide-arrow-left"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
          }
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
}

export default Politica;
