import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import links from "../../data/links.json";
import { useState } from "react";

export default function NavbarHorizontal() {
  const [selectedLink, setSelectedLink] = useState(links[0]);

  return (
    <ul className="flex flexCenter space">
      {links.map((link, id) =>
        link.openInNewTab === true ? (
          <motion.li key={id} className="noBullet positionRelative">
            <Link
              className="noDecoration colorLinks hoveredLink"
              to={link.url}
              target="_blank"
            >
              {link.name}
            </Link>
          </motion.li>
        ) : (
          <motion.li
            key={id}
            className="noBullet positionRelative"
            onClick={() => setSelectedLink(link)}
          >
            <Link
              className="noDecoration colorLinks hoveredLink"
              to={link.url}
              onClick={() => window.scrollTo(0, 0)}
            >
              {link.name}
            </Link>
            {link === selectedLink ? (
              <motion.div
                className="selectedLink"
                layoutId="selectedLink"
              ></motion.div>
            ) : null}
          </motion.li>
        )
      )}
    </ul>
  );
}
