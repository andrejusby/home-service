import styles from "./MainSection.module.scss";
import { Business } from "../types";
import Modal from "../../common/Modal";

interface MainSectionProps {
  business: Business;
}

const MainSection = ({ business }: MainSectionProps) => {
  return (
    <section className={styles.container}>
      <article className={styles.description}>
        <h2>Description</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          quos dolores laboriosam maiores ea doloremque! Sequi rem iure nemo,
          consequatur nam earum, repellat placeat porro vitae, autem magnam
          laborum molestiae! Est, laborum. Enim nihil repellendus possimus fuga
          libero ducimus dolorem. Illum doloribus aliquam, eius mollitia, culpa
          nulla quis dicta tempore nesciunt quo facilis sapiente ad enim neque
          aspernatur, temporibus molestias. Distinctio ab iusto, perferendis hic
          natus perspiciatis voluptatibus nobis magni at nemo, sed incidunt
          minima quod ducimus sapiente sit tenetur nesciunt. Veritatis odit
          cupiditate nesciunt asperiores placeat iusto repellat modi. Officia,
          cupiditate unde iste itaque odio quos quia enim velit labore similique
          optio aut. Qui natus incidunt obcaecati tempora perferendis sequi est
          necessitatibus, doloremque ut inventore dolore, ullam quisquam nulla?
          Commodi obcaecati magnam molestias quod repellat dolor officiis
          sapiente, voluptate non voluptatum atque molestiae cupiditate ullam?
          Iusto maxime illo laborum doloribus distinctio iure eligendi impedit
          ut. At totam nam consequatur! Nisi eos maxime accusamus hic corporis
          aperiam eaque blanditiis ipsa praesentium culpa similique facilis
          earum iusto, pariatur nesciunt, nulla officiis cum tenetur soluta. Ex
          dolore sequi eum asperiores nemo debitis. Hic unde ullam commodi magni
          corrupti iusto, obcaecati voluptate consequuntur sed repellat aliquid
          similique recusandae cupiditate veniam perferendis. Excepturi, earum
          incidunt. Consequuntur unde repellendus exercitationem quas voluptate
          corrupti laboriosam ipsum?
        </p>
        <h2>Gallery</h2>
        <div className={styles.gallery}>
          {business.imageUrls.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery image ${index + 1}`}
              className={styles.gallery}
            />
          ))}
        </div>
      </article>

      <aside>
        <Modal />

        <article>
          <h2 className={styles.sbTitle}>Similar business</h2>
          <div className={styles.similarBusiness}>
            <div className={styles.item}>
              <div>
                <img
                  src={business.imageUrls[0]}
                  alt={business.name}
                  className={styles.image}
                />
              </div>
              <div className={styles.info}>
                <h4>{business.name}</h4>
                <p>{business.contactPerson}</p>
                <p>{business.address}</p>
              </div>
            </div>
          </div>
        </article>
      </aside>
    </section>
  );
};

export default MainSection;
