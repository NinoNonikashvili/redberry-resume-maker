import React, { useEffect } from "react";

function Cv(props) {
  console.log("data in cv: ");
  console.log(props.data);
  useEffect(() => {
    console.log("cv rerendered");
  }, []);
  //gets data from props only. form side ensures that data is always correct either types or from sessionStorage
  return (
    <>
      <div style={CVStyles.CvWrapperStyles}>
        <div style={CVStyles.TextWrapperStyles}>
          {props.data?.name && (
            <h1 style={CVStyles.FullNameStyles}>
              {props.data?.name} {props.data?.surname}
            </h1>
          )}
          <div style={CVStyles.ContactsWrapperStyles}>
            <div>
              <span style={CVStyles.ContactIconStyles}>
                {props.data?.email && (
                  <svg
                    width="16.6"
                    height="16.6"
                    viewBox="0 0 18 18"
                    fill="#898989"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.00008 17.3334C7.86119 17.3334 6.7848 17.1145 5.77091 16.6767C4.75703 16.2395 3.87175 15.6423 3.11508 14.8851C2.35786 14.1284 1.76064 13.2431 1.32341 12.2292C0.885637 11.2154 0.666748 10.139 0.666748 9.00008C0.666748 7.8473 0.885637 6.76758 1.32341 5.76091C1.76064 4.75369 2.35786 3.87175 3.11508 3.11508C3.87175 2.35786 4.75703 1.76036 5.77091 1.32258C6.7848 0.885359 7.86119 0.666748 9.00008 0.666748C10.1529 0.666748 11.2326 0.885359 12.2392 1.32258C13.2465 1.76036 14.1284 2.35786 14.8851 3.11508C15.6423 3.87175 16.2395 4.75369 16.6767 5.76091C17.1145 6.76758 17.3334 7.8473 17.3334 9.00008V10.2084C17.3334 11.0279 17.0523 11.7256 16.4901 12.3017C15.9273 12.8784 15.2362 13.1667 14.4167 13.1667C13.9167 13.1667 13.4515 13.0556 13.0209 12.8334C12.5904 12.6112 12.2362 12.3195 11.9584 11.9584C11.5834 12.3334 11.1426 12.6287 10.6359 12.8442C10.1287 13.0592 9.58341 13.1667 9.00008 13.1667C7.8473 13.1667 6.8648 12.7604 6.05258 11.9476C5.2398 11.1354 4.83341 10.1529 4.83341 9.00008C4.83341 7.8473 5.2398 6.86452 6.05258 6.05175C6.8648 5.23952 7.8473 4.83341 9.00008 4.83341C10.1529 4.83341 11.1356 5.23952 11.9484 6.05175C12.7606 6.86452 13.1667 7.8473 13.1667 9.00008V10.2084C13.1667 10.6112 13.2917 10.927 13.5417 11.1559C13.7917 11.3854 14.0834 11.5001 14.4167 11.5001C14.7501 11.5001 15.0417 11.3854 15.2917 11.1559C15.5417 10.927 15.6667 10.6112 15.6667 10.2084V9.00008C15.6667 7.18064 15.0104 5.61452 13.6976 4.30175C12.3854 2.98953 10.8195 2.33341 9.00008 2.33341C7.18064 2.33341 5.61452 2.98953 4.30175 4.30175C2.98953 5.61452 2.33341 7.18064 2.33341 9.00008C2.33341 10.8195 2.98953 12.3854 4.30175 13.6976C5.61452 15.0104 7.18064 15.6667 9.00008 15.6667H13.1667V17.3334H9.00008ZM9.00008 11.5001C9.69452 11.5001 10.2848 11.257 10.7709 10.7709C11.257 10.2848 11.5001 9.69452 11.5001 9.00008C11.5001 8.30564 11.257 7.71536 10.7709 7.22925C10.2848 6.74314 9.69452 6.50008 9.00008 6.50008C8.30564 6.50008 7.71536 6.74314 7.22925 7.22925C6.74314 7.71536 6.50008 8.30564 6.50008 9.00008C6.50008 9.69452 6.74314 10.2848 7.22925 10.7709C7.71536 11.257 8.30564 11.5001 9.00008 11.5001Z"
                      fill="#898989"
                    />
                  </svg>
                )}
              </span>
              {props.data?.email && (
                <span style={CVStyles.ContactStyles}>{props.data?.email}</span>
              )}
            </div>
            <div>
              <span style={CVStyles.ContactIconStyles}>
                {props.data?.phone_number && (
                  <svg
                    width="16.6"
                    height="16.6"
                    viewBox="0 0 18 18"
                    fill="#898989"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.7933 17.4442C11.5933 17.4001 8.19242 16.9301 4.63075 13.3692C1.06992 9.80756 0.600752 6.40756 0.555752 5.20672C0.489085 3.37672 1.89075 1.59922 3.50992 0.905058C3.7049 0.820863 3.91842 0.788808 4.12953 0.812037C4.34064 0.835266 4.54208 0.912982 4.71409 1.03756C6.04742 2.00922 6.96742 3.47922 7.75742 4.63506C7.93124 4.889 8.00556 5.19801 7.96622 5.50322C7.92687 5.80843 7.77662 6.0885 7.54409 6.29006L5.91825 7.49756C5.8397 7.55428 5.78441 7.63758 5.76265 7.73199C5.74089 7.8264 5.75413 7.92551 5.79992 8.01089C6.16825 8.68006 6.82325 9.67672 7.57325 10.4267C8.32409 11.1767 9.36742 11.8751 10.0833 12.2851C10.173 12.3354 10.2786 12.3495 10.3785 12.3244C10.4783 12.2993 10.5647 12.2369 10.6199 12.1501L11.6783 10.5392C11.8728 10.2808 12.1599 10.1076 12.4792 10.056C12.7986 10.0045 13.1256 10.0785 13.3916 10.2626C14.5641 11.0742 15.9324 11.9784 16.9341 13.2609C17.0688 13.4341 17.1545 13.6404 17.1822 13.8581C17.2099 14.0758 17.1786 14.2969 17.0916 14.4984C16.3941 16.1259 14.6291 17.5117 12.7933 17.4442Z"
                      fill="#898989"
                    />
                  </svg>
                )}
              </span>
              {props.data?.phone_number && (
                <span style={CVStyles.ContactStyles}>
                  {props.data?.phone_number}
                </span>
              )}
            </div>
          </div>
          {props.data?.about_me && (
            <h2 style={CVStyles.h2Styles}>ჩემს შესახებ</h2>
          )}
          {props.data?.about_me && (
            <p style={CVStyles.textAreaStyles}>{props.data?.about_me}</p>
          )}
        </div>
        <div style={CVStyles.imgWrapperStyles}>
          {props.data?.image && (
            <img
              style={CVStyles.imgStyles}
              src={props.data?.image}
              alt="profile image"
            />
          )}
        </div>
      </div>
    </>
  );
}

const CVStyles = {
  CvWrapperStyles: {
    position: "absolute",
    top: "0",
    right: "0",
    width: "42%",
    display: "flex",
    padding: "48px 75px",
  },
  TextWrapperStyles: {
    width: "63%",
  },
  FullNameStyles: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "34px",
    lineHeight: "42px",
    color: "#F93B1D",
    fontVariantCaps: "all-petite-caps",
  },
  ContactStyles: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "21px",
    color: "#1A1A1A",
  },
  ContactIconStyles: {
    marginRight: "12px",
  },
  ContactsWrapperStyles: {
    margin: "17px 0 34px",
  },
  h2Styles: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "22px",
    color: "#F93B1D",
    fontVariantCaps: "all-petite-caps",
    marginBottom: "15px",
  },
  textAreaStyles: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "22px",
    color: "#000000",
  },
  imgWrapperStyles: {
    width: "37%",
  },
  imgStyles: {
    margin: "0",
    maxWidth: "100%",
    height: "246px",
    borderRadius: "133px",
    overflow: "hidden",
  },
};
export default Cv;
