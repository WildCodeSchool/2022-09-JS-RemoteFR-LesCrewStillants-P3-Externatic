import React, { useState } from "react";

import offerData from "@services/offerData";
import Pencil from "@assets/icons/Pencil.svg";
import Check from "@assets/icons/Check.svg";
import "./OfferForm.scss";

function OfferForm() {
  const [img, setImg] = useState(offerData[0].img);
  const [nameJob, setNameJob] = useState(offerData[0].nameJob);
  const [nameEntreprise, setNameEntreprise] = useState(
    offerData[0].nameEntreprise
  );
  const [adressEntreprise, setAdressEntreprise] = useState(
    offerData[0].adressEntreprise
  );
  const [contrat, setContrat] = useState(offerData[0].contrat);
  const [compensation, setCompensation] = useState(offerData[0].compensation);
  const [schedule, setSchedule] = useState(offerData[0].schedule);
  const [descJob, setDescJob] = useState(offerData[0].descJob);
  const [descEntreprise, setDescEntreprise] = useState(
    offerData[0].descEntreprise
  );
  const [mission, setMission] = useState(offerData[0].mission);
  const [profil, setProfil] = useState(offerData[0].profil);
  const [advantages, setAdvantages] = useState(offerData[0].advantages);

  const [isEditingForm1, setIsEditingForm1] = useState(false);
  const [isEditingForm2, setIsEditingForm2] = useState(false);
  const [isEditingForm3, setIsEditingForm3] = useState(false);

  const [modif, setModif] = useState("Pencil");

  const [showModal, setShowModal] = useState(false);

  const images = {
    Pencil,
    Check,
  };

  function handleEdit1() {
    setIsEditingForm1(!isEditingForm1);
    if (modif === "Pencil") {
      setModif("Check");
    } else {
      setModif("Pencil");
    }
  }

  function handleEdit2() {
    setIsEditingForm2(!isEditingForm2);
    if (modif === "Pencil") {
      setModif("Check");
    } else {
      setModif("Pencil");
    }
  }

  function handleEdit3() {
    setIsEditingForm3(!isEditingForm3);
    if (modif === "Pencil") {
      setModif("Check");
    } else {
      setModif("Pencil");
    }
  }

  function toggleModal() {
    handleEdit3();
    setShowModal(!showModal);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsEditingForm1(false);
    setIsEditingForm2(false);
    console.warn("infos envoyées");
    // Envoyer les données vers le backend ici
  }

  return (
    <section
      className="container"
      style={{ backgroundImage: `url(${img})` }}
      onChange={(event) => setImg(event.target.value)}
    >
      <div className="titre">
        <h1>Enregistrer une nouvelle offre d'emploi</h1>
      </div>
      <div className="banner_top">
        <button className="button" type="submit" onClick={() => toggleModal()}>
          <img src={images[modif]} alt="Modif" />
        </button>
        {showModal && (
          <form className="modal_form" onSubmit={handleSubmit}>
            <p>Changer l'image :</p>
            <input
              type="text"
              value={img}
              onChange={(event) => setImg(event.target.value)}
            />
          </form>
        )}
      </div>
      <section className="banner_job">
        {isEditingForm1 ? (
          <>
            <form className="title_job" onSubmit={handleSubmit}>
              <input
                type="text"
                value={nameJob}
                onChange={(event) => setNameJob(event.target.value)}
              />
              <input
                type="text"
                value={nameEntreprise}
                onChange={(event) => setNameEntreprise(event.target.value)}
              />
              <input
                type="text"
                value={adressEntreprise}
                onChange={(event) => setAdressEntreprise(event.target.value)}
              />
              <input
                type="text"
                value={contrat}
                onChange={(event) => setContrat(event.target.value)}
              />
              <input
                type="text"
                value={compensation}
                onChange={(event) => setCompensation(event.target.value)}
              />
              <input
                type="text"
                value={schedule}
                onChange={(event) => setSchedule(event.target.value)}
              />
            </form>
            <button className="button" type="submit" onClick={handleEdit1}>
              <img src={images[modif]} alt="Modif" />
            </button>
          </>
        ) : (
          <>
            <form className="title_job">
              <h2>{nameJob}</h2>
              <h3>{nameEntreprise}</h3>
              <h3>{adressEntreprise}</h3>
              <p>{contrat}</p>
              <p>{compensation}</p>
              <p>{schedule}</p>
            </form>
            <button className="button" type="submit" onClick={handleEdit1}>
              <img src={images[modif]} alt="Modif" />
            </button>
          </>
        )}
      </section>
      <section className="banner_description">
        {isEditingForm2 ? (
          <>
            <form className="description_job" onSubmit={handleSubmit}>
              <h2>Description du poste</h2>
              <textarea
                value={descJob}
                rows={4}
                onChange={(event) => setDescJob(event.target.value)}
              />
              <h2>Description de l'entreprise</h2>
              <textarea
                rows={4}
                value={descEntreprise}
                onChange={(event) => setDescEntreprise(event.target.value)}
              />
              <h2>Votre mission</h2>
              <textarea
                rows={4}
                value={mission}
                onChange={(event) => setMission(event.target.value)}
              />
              <h2>Profil et expérience souhaités</h2>
              <textarea
                rows={4}
                value={profil}
                onChange={(event) => setProfil(event.target.value)}
              />
              <h2>Avantages</h2>
              <textarea
                rows={4}
                value={advantages}
                onChange={(event) => setAdvantages(event.target.value)}
              />
            </form>
            <div className="align">
              <button className="button" type="submit" onClick={handleEdit2}>
                <img src={images[modif]} alt="Modif" />
              </button>
            </div>
          </>
        ) : (
          <>
            <form className="description_job">
              <h2>Description du poste</h2>
              <p>{descJob}</p>
              <h2>Description de l'entreprise</h2>
              <p>{descEntreprise}</p>
              <h2>Votre mission</h2>
              <p>{mission}</p>
              <h2>Profil et expérience souhaités</h2>
              <p>{profil}</p>
              <h2>Avantages</h2>
              <p>{advantages}</p>
            </form>
            <div className="align">
              <button className="button" type="submit" onClick={handleEdit2}>
                <img src={images[modif]} alt="Modif" />
              </button>
            </div>
          </>
        )}
      </section>
      <div className="align">
        <button className="button_valid" type="submit" onClick={handleSubmit}>
          Envoyer les modifications
        </button>
      </div>
    </section>
  );
}

export default OfferForm;
