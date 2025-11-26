import React, { useState } from "react";
import CustomTag from "../util/CustomTag";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import { getWhatsappLink } from "../util/WhatsappLink";

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
  removeTarget,
  removeAnchor,
  tagName,
  color,
  animation = true,
  colorMode,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nomeErro, setNomeErro] = useState("");
  const [telefoneErro, setTelefoneErro] = useState("");
  const [formErro, setFormErro] = useState("");

  // NOVO ESTADO PARA LOADING
  const [loading, setLoading] = useState(false);

  let textSizeClass = "";
  if (size === "small") {
    sizeFeatures = "rounded-[4px] px-[18px] py-[10px]";
    textSizeClass = "text-paragraph3 font-secondFont";
    gap = "gap-[10px]";
  } else {
    sizeFeatures = "rounded-[8px] px-[30px] py-[16px]";
    textSizeClass = "text-paragraph2 tablet1:text-paragraph4 font-secondFont";
    gap = "gap-[20px]";
  }

  const Animation = animation ? MotionDivDownToUp : "div";
  const CustomTagName = removeAnchor ? "div" : tagName || "a";

  const buttonColors = {
    dark: "text-labelButtons",
    light: "text-labelButtons",
    default: "text-labelButtons",
  };
  const buttonColor = buttonColors[colorMode] || buttonColors.default;

  const shouldRedirectToWhatsapp = !buttonLink && !onClick;
  const finalButtonLink = shouldRedirectToWhatsapp
    ? getWhatsappLink()
    : buttonLink;

  const handleOpenModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleNomeChange = (e) => {
    const valor = e.target.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, "");
    setNome(valor);

    if (valor.trim() === "") {
      setNomeErro("");
      return;
    }

    if (valor.trim().length < 3) setNomeErro("Digite pelo menos 3 letras");
    else setNomeErro("");
  };

  const handleTelefoneChange = (e) => {
    let valor = e.target.value.replace(/\D/g, "");
    valor = valor.slice(0, 11);

    if (valor.length >= 1) valor = "(" + valor;
    if (valor.length >= 3) valor = valor.slice(0, 3) + ") " + valor.slice(3);
    if (valor.length >= 10) valor = valor.slice(0, 10) + "-" + valor.slice(10);

    setTelefone(valor);

    const somenteNumeros = valor.replace(/\D/g, "");

    if (somenteNumeros.length === 0) {
      setTelefoneErro("");
      return;
    }

    if (somenteNumeros.length < 11) setTelefoneErro("Telefone incompleto");
    else setTelefoneErro("");
  };

  const enviarParaPlanilha = async () => {
    try {
      await fetch(
        "https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbwwjRCz3TZNHu-35mvCXougFNOtWQj61ccxyJuHm3abxTbQrYNybbpduaYNcy8LwN6Xig/exec",
        {
          method: "POST",
          body: JSON.stringify({
            nome: nome,
            email: telefone,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log("Erro ao enviar para planilha:", error);
    }
  };

  const handleSubmit = async () => {
    const telefoneNumerico = telefone.replace(/\D/g, "");

    let erro = false;

    if (nome.trim() === "") {
      setNomeErro("Esse campo não pode ficar vazio");
      erro = true;
    }

    if (telefoneNumerico === "") {
      setTelefoneErro("Esse campo não pode ficar vazio");
      erro = true;
    }

    if (erro) return;

    if (nome.trim().length < 2 || telefoneNumerico.length < 11) {
      setFormErro("Preencha os campos corretamente antes de prosseguir");
      return;
    }

    setFormErro("");

    // ATIVA LOADING
    setLoading(true);

    await enviarParaPlanilha();

    setIsModalOpen(false);

    // DESATIVA LOADING
    setLoading(false);

    window.open(finalButtonLink, "_blank");
  };

  return (
    <>
      <CustomTag
        tagName={CustomTagName}
        {...(removeTarget ? {} : { target: "_blank" })}
        {...(removeAnchor ? {} : { href: "#" })}
        onClick={handleOpenModal}
        className="inline-block max-w-full w-fit"
      >
        {animation ? (
          <MotionDivDownToUp className="w-auto">
            <button
              className={`flex ${className} ${sizeFeatures} shadow-custom-opacityButton shadow-shadowHero/0 ${
                color || "bg-buttonColor"
              } flex-row items-center justify-around transition text-labelButtons desktop1:hover:scale-110`}
            >
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
          <div className="w-auto">
            <button
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
          <div className="bg-white w-[90%] max-w-[420px] p-6 rounded-xl shadow-xl relative">
            <button
              className="absolute text-xl font-bold top-3 right-3"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>

            <h2 className="mb-4 text-lg font-bold font-secondFont">
              Preencha para ser atendido agora mesmo:
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
                className="py-3 text-white bg-[#075e54] rounded-lg hover:scale-105 transition-all"
              >
                {loading ? "Aguarde..." : "Ser atendido no WhatsApp"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
