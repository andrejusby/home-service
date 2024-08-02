import styles from './TopSection.module.scss'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { PiExport } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { LuClock4 } from "react-icons/lu";
import { Business } from '../types';

interface TopSectionProps {
    business: Business
}


const TopSection = ({ business }: TopSectionProps) => {
  return (
    <section className={styles.container}>
        <article className={styles.leftSide}>
          <div>
            {business.imageUrls.length && (
              <img
                src={business.imageUrls[0]}
                alt={business.name}
                className={styles.circularImage}
              />
            )}
          </div>
          <div className={styles.description}>
            <span className={styles.chip}>{business.category}</span>
            <h2 className={styles.name}>{business.name}</h2>
            <div className={styles.info}>
              <IoLocationOutline />
              <p>{business.address}</p>
            </div>
            <div className={styles.info}>
              <MdOutlineEmail />
              <p>{business.email}</p>
            </div>
          </div>
        </article>

        <article className={styles.rightSide}>
          <PiExport className={styles.exportIcon} />
          <div className={styles.contactPerson}>
            <IoPersonOutline />
            <p>{business.contactPerson}</p>
          </div>
          <div className={styles.time}>
            <LuClock4 />
            <p>Available 8:00 AM to 10:00 PM</p>
          </div>
        </article>
      </section>
  )
}

export default TopSection