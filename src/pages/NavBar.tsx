import { useEffect, useState } from "react";
import { TextField, Box } from "@mui/material";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";
import Modal from "./Modal";
import axios from "axios";
function Navbar() {
  const navigate = useNavigate();
  const [level, setLevel] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const itemDescription = data.get("description");
    const itemName = data.get("itemName");
    const quantity = data.get("quantity");
    const price = data.get("price");
    const userId = localStorage.getItem("userId");
    const imageLink = data.get("image");
    if (userId && quantity && price) {
      await axios
        .post(`http://localhost:3000/item`, {
          name: itemName,
          description: itemDescription,
          imageLink: imageLink,
          quantity: +quantity,
          price: +price,
          userId: +userId,
        })
        .then(() => {
          setShowModal(false);
          navigate("/");
        })
        .catch(() => console.log(""));
    }
  };

  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const permission = localStorage.getItem("permission");
    if (permission == "1") {
      setLevel(true);
    }
  }, [navigate]);

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__content__logo">
          PerfumeStore
        </Link>
        <nav
          className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
        >
          <ul>
            <li>
              <Link to="/market">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

            {level ? (
              <button
                className="btn"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                New item
              </button>
            ) : (
              ""
            )}
            <button
              className="btn"
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
            >
              Sign Out
            </button>
          </ul>
        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>

      {showModal ? (
        <Modal>
          <div className="modalDiv">
            <h1>Create a new item</h1>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                name="itemName"
                label="Item Name"
                type="text"
                id="itemName"
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="description"
                label="description"
                type="text"
                id="description"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="image"
                label="image link"
                type="text"
                id="image"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="quantity"
                label="stock"
                type="number"
                id="quantity"
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="price"
                label="Listing Price"
                type="number"
                id="price"
              />

              <div className="buttonsDiv">
                <button type="submit" className="yesButton">
                  Yes
                </button>
                <button
                  className="noButton"
                  onClick={() => setShowModal(false)}
                >
                  No
                </button>
              </div>
            </Box>
          </div>
        </Modal>
      ) : (
        ""
      )}
    </header>
  );
}

export default Navbar;
