import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <div className=" dark:text-white text-black flex items-center justify-between mt-8   shadow">
      <div className=" ">
        <p className="text-xs mx-10 ">
          Sebuah Website Yang Bisa <br /> Memantau Cuaca Diseluruh Dunia <br />
          secara realtime
        </p>
      </div>

      <div className="flex gap-2 mx-10 items-center">
        {" "}
        <FontAwesomeIcon
          size="lg"
          className="dark:text-white  "
          icon={faGithub}
        />
        <FontAwesomeIcon
          className="dark:text-white  "
          icon={faInstagram}
          size="lg"
        />
        <FontAwesomeIcon
          className="dark:text-white  "
          icon={faEnvelope}
          size="lg"
        />
        <FontAwesomeIcon
          className="dark:text-white  "
          icon={faLinkedin}
          size="lg"
        />{" "}
        <p className="text-xs">©2025 Create BY Kzvin</p>
      </div>
    </div>
  );
}
