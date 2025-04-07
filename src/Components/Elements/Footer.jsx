import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="dark:text-white dark:bg-[#1e293a] text-black flex items-center justify-between mt-2 shadow">
      <div className="md:flex md w w-full justify-between">
        <div className="p-1 mx-5">
          <h1 className="md:text-start text-center">Tentang Aplikasi</h1>
          <p className="md:text-start text-center text-sm font-light opacity-40">
            Aplikasi Prediksi Cuaca Seluruh Dunia menggunakan <br />
            API OpenWeather
          </p>
        </div>

        <div className="flex gap-3 mx-10 items-center justify-center py-4">
          <a
            href="https://github.com/KevinMarpaung"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              size="lg"
              className="dark:text-white hover:text-gray-400 transition"
              icon={faGithub}
            />
          </a>
          <a
            href="https://instagram.com/kzvin_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              size="lg"
              className="dark:text-white hover:text-pink-400 transition"
              icon={faInstagram}
            />
          </a>
          <a
            href="mailto:kmarpaung430@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              size="lg"
              className="dark:text-white hover:text-blue-300 transition"
              icon={faEnvelope}
            />
          </a>
          <a
            href="https://linkedin.com/in/kevin-marpaung0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              size="lg"
              className="dark:text-white hover:text-blue-500 transition"
              icon={faLinkedin}
            />
          </a>
          <p className="text-xs hidden md:flex">©2025 Dibuat Oleh Kzvin</p>
        </div>
      </div>
    </div>
  );
}
