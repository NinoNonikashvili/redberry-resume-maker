import React, { useEffect } from "react";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

function ImageInput(props, reference) {
  const [error, setError] = useState(false);
  const [uploadedFile, setUploadedFile] = useState("");
  const [avoidLoop, setAvoidLoop] = useState(true);

  //check if empty
  if (props.isSubmitClicked && !uploadedFile && avoidLoop) {
    setAvoidLoop(false);
    setError(true);
  }
  //initialize firebase
  let app = null;
  if (app === null) {
    app = initializeApp({
      apiKey: "AIzaSyAuKuGpSebaC1K8e8v9CBAz-NPTj1ECvA0",
      authDomain: "redberry-resume-maker.firebaseapp.com",
      projectId: "redberry-resume-maker",
      storageBucket: "redberry-resume-maker.appspot.com",
      messagingSenderId: "111384610633",
      appId: "1:111384610633:web:792c6b69d10e2631757c98",
      measurementId: "G-BEQNLENT9E",
    });
  }

  const storage = getStorage(app);
  const storageRef = ref(storage, "userProfileImage");

  //download image from firebase
  useEffect(() => {
    getDownloadURL(ref(storage, "userProfileImage"))
      .then((url) => {
        console.log("image downloaded from firebase");
        setError(false);
        //save url on sessionStorage
        sessionStorage.setItem("image", url);
        props.setData((prev) => {
          return { ...prev, image: url };
        });
      })
      .catch((error) => {
        // Handle any errors
        console.log("error: " + error);
      });
  }, [uploadedFile]);

  return (
    <div style={FileStyles.InputWrapper}>
      <span
        style={FileStyles.TitleStyles}
        {...(error && {
          style: {
            ...FileStyles.TitleStyles,
            ...{ color: "#E52F2F" },
          },
        })}
      >
        პირადი ფოტოს ატვირთვა
      </span>
      <label htmlFor="image" style={FileStyles.LabelStyles}>
        ატვირთვა
      </label>
      <input
        type="file"
        id="image"
        style={FileStyles.UploaderStyles}
        ref={reference}
        onChange={(e) => {
          console.log(e.target.files[0]);
          if ("image file on change" + e.target.files[0]) {
            uploadBytes(storageRef, e.target.files[0]).then((snapshot) => {
              console.log("Uploaded a blob or file!");
            });
            setUploadedFile(e.target.files[0]);
            setError(false);
          }
        }}
      />
      <svg
        width="22"
        height="19"
        viewBox="0 0 22 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "none" }}
        {...(error && {
          style: {
            ...FileStyles.ErrorIcon,
          },
        })}
      >
        <path
          d="M21.1906 15.6251L12.95 1.37506C12.7527 1.03234 12.4686 0.747668 12.1262 0.549724C11.7839 0.351781 11.3954 0.247559 11 0.247559C10.6045 0.247559 10.2161 0.351781 9.87374 0.549724C9.53139 0.747668 9.24727 1.03234 9.04999 1.37506L0.80936 15.6251C0.609173 15.966 0.502786 16.3539 0.500999 16.7493C0.499213 17.1447 0.602092 17.5336 0.79919 17.8763C0.996287 18.2191 1.28058 18.5036 1.62321 18.701C1.96583 18.8984 2.35458 19.0015 2.74999 19.0001H19.25C19.6454 19.0015 20.0341 18.8984 20.3768 18.701C20.7194 18.5036 21.0037 18.2191 21.2008 17.8763C21.3979 17.5336 21.5008 17.1447 21.499 16.7493C21.4972 16.3539 21.3908 15.966 21.1906 15.6251ZM10.25 7.75006C10.25 7.55115 10.329 7.36038 10.4697 7.21973C10.6103 7.07908 10.8011 7.00006 11 7.00006C11.1989 7.00006 11.3897 7.07908 11.5303 7.21973C11.671 7.36038 11.75 7.55115 11.75 7.75006V11.5001C11.75 11.699 11.671 11.8897 11.5303 12.0304C11.3897 12.171 11.1989 12.2501 11 12.2501C10.8011 12.2501 10.6103 12.171 10.4697 12.0304C10.329 11.8897 10.25 11.699 10.25 11.5001V7.75006ZM11 16.0001C10.7775 16.0001 10.56 15.9341 10.375 15.8105C10.19 15.6868 10.0458 15.5111 9.96062 15.3056C9.87547 15.1 9.85319 14.8738 9.8966 14.6556C9.94001 14.4374 10.0472 14.2369 10.2045 14.0796C10.3618 13.9222 10.5623 13.8151 10.7805 13.7717C10.9987 13.7283 11.2249 13.7505 11.4305 13.8357C11.6361 13.9208 11.8118 14.065 11.9354 14.25C12.059 14.4351 12.125 14.6526 12.125 14.8751C12.125 15.1734 12.0065 15.4596 11.7955 15.6706C11.5845 15.8815 11.2984 16.0001 11 16.0001Z"
          fill="#F02424"
        />
      </svg>
    </div>
  );
}
const FileStyles = {
  InputWrapper: {
    margin: "54px 0 0",
    position: "relative",
  },
  TitleStyles: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "22px",
    color: "#1A1A1A",
    marginRight: "15px",
  },
  UploaderStyles: {
    display: "none",
    width: "100%",
  },
  LabelStyles: {
    backgroundColor: "#0E80BF",
    borderRadius: "4px",
    padding: "10px",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#FFFFFF",
    width: "107px",
    height: "27px",
  },
  ErrorIcon: {
    display: "block",
    position: "absolute",
    top: "2px",
    left: "340px",
  },
};

export default React.forwardRef(ImageInput);
