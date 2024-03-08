import React from "react";
import { useEffect } from "react";
import "./style.css";
function Modal() {
  useEffect(() => {
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("myBtn");
    const span = document.getElementsByClassName("close")[0];

    const openModal = () => {
      modal.style.display = "block";
    };

    const closeModal = () => {
      modal.style.display = "none";
    };

    const closeOutsideModal = (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };

    btn.addEventListener("click", openModal);
    span.addEventListener("click", closeModal);
    window.addEventListener("click", closeOutsideModal);

    return () => {
      btn.removeEventListener("click", openModal);
      span.removeEventListener("click", closeModal);
      window.removeEventListener("click", closeOutsideModal);
    };
  }, []);

  return (
    <>
      <button id="myBtn">Open Modal</button>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <h2>Centro de salud familiar La Florida</h2>
          <p>
            Cesfam<br></br>Av. La Florida 6015 81728361, La Florida<br></br>
            Region Metropolitana<br></br>Teléfono: (2)24362527
          </p>
          <select name="servicio" id="servicioId">
            <option value="">Servicio</option>
            <option value="1">Vacuna</option>
            <option value="2">Examen</option>
          </select>
          <button type="submit">Buscar</button>
          <p>Some text in the Modal..</p>
          <div className="modal-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
            accusantium distinctio fuga? Consectetur dignissimos deleniti fuga
            dolorem, itaque dolorum iusto nulla fugiat earum. Rem expedita
            possimus nobis, architecto magni quo? Praesentium ducimus natus
            dicta eos, odio ipsa? Suscipit omnis deserunt sint eius laboriosam
            molestiae mollitia eaque laudantium. Atque illum beatae quod dolorum
            ullam qui vitae tempore in accusamus aut tempora eveniet nesciunt
            quasi doloribus, ad eos iure quis nostrum eaque ipsa quos dolore
            minus laudantium aspernatur. Illum est magni tempora maxime, at
            earum alias dolore quod asperiores beatae vero non quae repudiandae
            animi? Numquam sapiente corporis, voluptas consectetur nesciunt
            quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloribus beatae dignissimos iusto, reiciendis numquam sunt culpa,
            rem eaque molestias harum porro rerum ipsum animi accusamus
            exercitationem consequuntur veniam dolorem, molestiae minus? Saepe
            dolor sequi exercitationem, voluptas quidem repellat doloribus,
            dolorum sit vel ipsum explicabo omnis dignissimos et reprehenderit
            delectus iste quam illum laboriosam deserunt atque amet architecto
            eius! Voluptatem quo, commodi est eaque aliquam et omnis
            perspiciatis sit velit enim harum neque placeat? Vero, aliquam id
            placeat voluptas voluptates expedita rem optio, aut natus ipsam a
            eligendi. Sapiente quam ipsum eveniet rem repellendus ullam
            architecto itaque blanditiis corporis iusto? Ut. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Repellat alias non
            consequuntur placeat totam. Suscipit nisi, deleniti laudantium totam
            molestiae consectetur maxime quibusdam dolorum iusto, voluptatibus
            perspiciatis officia ullam fugit amet labore ducimus consequatur?
            Dolorum, quo. Quibusdam debitis itaque laudantium corrupti, mollitia
            earum nemo sed nobis doloribus et officia facere dignissimos quasi
            qui vitae at architecto hic quas labore veritatis cumque illo?
            Dicta, odit. Voluptates doloribus at delectus. Fuga dolorum
            necessitatibus magnam placeat tempora, reiciendis autem
            reprehenderit, aliquid iste explicabo maxime ut quae nulla
            aspernatur, harum eaque voluptates eius. Minima facilis, vitae
            quisquam tenetur soluta temporibus? Quo doloribus illum voluptatum
            eligendi error reprehenderit magnam hic laboriosam impedit quos
            dolor cum tenetur nesciunt porro delectus consectetur, soluta eaque
            vel possimus pariatur temporibus? Culpa blanditiis omnis fugit
            minus. Nostrum ut saepe reprehenderit beatae porro. Iste quidem
            doloremque voluptate porro sequi impedit velit est, maiores
            consectetur iusto, enim dolor corrupti obcaecati corporis culpa
            error molestiae? Esse eos sint suscipit ipsum vero natus eveniet
            dolor voluptas debitis tenetur voluptatibus repellat accusantium
            porro vel necessitatibus consequuntur quod inventore odio deserunt,
            nostrum quas? Tempore suscipit voluptas saepe at sequi, tenetur eius
            reprehenderit, perspiciatis necessitatibus commodi animi, libero
            fugiat natus! Delectus iure quos error, ducimus est facilis! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Tempore totam,
            maiores rem ratione assumenda vero ipsum labore dolorum dignissimos
            porro laborum eaque eos corrupti non est, aliquam voluptatibus
            quisquam nemo animi illo dolorem minus excepturi vitae. Iusto
            cupiditate est esse cumque. Similique, minus impedit! Dignissimos
            doloribus accusantium, illo earum aspernatur magnam. Eligendi iusto
            eius culpa nulla, error nobis atque rerum id! Alias iste dicta
            beatae inventore vitae sint, modi dignissimos quisquam nisi corporis
            maiores sequi vel a culpa voluptas excepturi voluptate atque error
            dolores temporibus similique veritatis! Esse veniam veritatis
            dolorem possimus aliquam nesciunt corrupti omnis asperiores
            explicabo consectetur! Vero expedita obcaecati numquam voluptates
            minima adipisci minus iste architecto illum libero velit nihil odio
            nisi similique perferendis nemo non impedit, veritatis
            exercitationem tenetur distinctio deserunt sunt. Est distinctio
            facilis ad libero ut. Quo fuga beatae itaque? Sequi illo minima
            maxime neque fugiat sit dolores dolorem cumque velit quia natus
            aperiam eligendi, excepturi possimus sunt quo ipsa cum non esse odio
            ullam. Sapiente maiores consequatur recusandae facere cum quam,
            tempore incidunt sit blanditiis minus labore aspernatur
            reprehenderit soluta velit qui porro libero sed ipsam? Sit est odit
            numquam a neque temporibus voluptas sed atque, commodi harum unde,
            veniam fuga corrupti hic at. Vitae aperiam assumenda itaque quae
            doloremque rem quos animi saepe ad facilis quod eaque minima, iure
            praesentium incidunt alias cupiditate nulla deleniti fuga cumque
            molestias! Ad enim beatae, ratione officiis corrupti ea perferendis
            debitis obcaecati expedita hic, facere quam recusandae deleniti
            distinctio unde ullam provident, a adipisci. Temporibus ea nostrum
            vero iure, adipisci fuga atque! Corporis numquam nesciunt animi
            praesentium pariatur molestias a doloribus asperiores saepe enim?
            Mollitia natus molestias, similique vero illum, voluptate, harum
            velit provident ab eos dolorem! Esse vero eveniet obcaecati quisquam
            pariatur explicabo deserunt sit? Quisquam, consectetur fuga? Nobis
            repellendus, ab illum vero veritatis quisquam.
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
