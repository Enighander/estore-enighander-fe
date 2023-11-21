import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import ModalCreate from "../modalCreateAddress/modal-create-address";
import ModalUpdate from "../modalUpdateAddress/modal-update-address";

const ModalAddress = () => {
  const userId = localStorage.getItem("userId");
  const [show, setShow] = useState(false);
  const [address, setAddress] = useState([]);
  const handleClose = () => setShow(false);

  const fetchAddressData = () => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_API_URL}/address/${userId}`)
      .then((response) => {
        setAddress(response.data.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

const markAsPrimary = (addressId, isPrimary) => {
  axios
    .put(`${import.meta.env.VITE_REACT_APP_API_URL}/address/${addressId}`, {
      primary: isPrimary,
    })
    .then((response) => {
      console.log('Address marked as primary:', response.data);
      fetchAddressData();
    })
    .catch((error) => {
      console.error("Error marking address as primary:", error);
    });
};

  useEffect(() => {
    fetchAddressData();
  }, [userId]);

  return (
    <>
      <div>
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton></Modal.Header>
          <Modal.Title style={{ margin: "0 auto", padding: "0" }}>
            Choose another address
          </Modal.Title>
          <Modal.Body style={{ height: 400 }}>
            <ModalCreate />
            {address ? (
              <div
                className="newAddress mt-4"
                style={{
                  maxWidth: "100%",
                  width: "710px",
                  height: "210px",
                  border: "1px solid #DB3022",
                  borderRadius: "8px",
                  margin: "0 auto",
                  padding: "0",
                }}
              >
                <div className="m-3">
                  <h6>{address.recipient_name}</h6>
                  <span>{address.phone}</span>
                  <p style={{ maxWidth: "100%", height: 58 }}>
                    {address.address_as}, {address.address}, {address.city},{" "}
                    {address.postal_code}
                  </p>
              <label>
                 Set as Primary:
                 <input
                  type="checkbox"
                  checked={address.primary}
                  onChange={() => markAsPrimary(address.id, !address.primary)}
                 />
              </label>
                  <ModalUpdate />
                </div>
              </div>
            ) : (
              <div
                className="addressNew mt-4"
                style={{
                  maxWidth: "100%",
                  width: "710px",
                  height: "210px",
                  border: "1px solid #DB3022",
                  borderRadius: "8px",
                  margin: "0 auto",
                  padding: "0",
                }}
              >
                <h6 className="m-3">No address.</h6>
              </div>
            )}
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default ModalAddress;
