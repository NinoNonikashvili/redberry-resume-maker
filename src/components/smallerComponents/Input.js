import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Input({ errors, isSubmitClicked, ...otherProps }, ref) {
  const [value, setValue] = useState("");
  useEffect(() => {
    const value = JSON.parse(sessionStorage.getItem(otherProps.name));
    setValue(value);

    // console.log("sessionStorage initial: " + text);
  }, []); //without this below function is executed where value is empty string and it is stored in storage

  useEffect(() => {
    sessionStorage.setItem(otherProps.name, JSON.stringify(value));
    otherProps.setData((prev) => {
      return { ...prev, [otherProps.name]: value };
    });
  }, [value]);

  const maskData = (value, firstDig) => {
    if (value[5] !== firstDig) {
      return "";
    } else {
      value = value.substr(6);
      return (
        "5" +
        (value
          .match(/\d{1,2}/g)
          ?.join(" ")
          .substr(0, 11) || "")
      );
    }
  };
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: `${otherProps.width}`,
        padding: "5px 0",
        marginTop: "34px",
      }}
    >
      <label
        style={InputStyles.Label}
        {...(isSubmitClicked &&
          errors[otherProps.name] && {
            style: {
              ...InputStyles.Label,
              ...{ color: "#E52F2F" },
            },
          })}
      >
        {otherProps.label}
      </label>
      <input
        style={InputStyles.DefaultInput}
        ref={ref}
        {...otherProps}
        {...(isSubmitClicked &&
          !errors[otherProps.name] && {
            style: {
              ...InputStyles.DefaultInput,
              ...{ border: "1px solid #98E37E" },
            },
          })}
        {...(isSubmitClicked &&
          errors[otherProps.name] && {
            style: {
              ...InputStyles.DefaultInput,
              ...{ border: "1px solid #EF5050" },
            },
          })}
        onFocus={(e) => {
          if (!isSubmitClicked) {
            e.target.style.border = "2px solid #BCBCBC";
          }
          e.target.style.color = "#000000";
        }}
        onBlur={(e) => {
          if (!isSubmitClicked) {
            e.target.style.border = "1px solid #BCBCBC";
          }
          e.target.style.color = "#00000099";
        }}
        onKeyUp={(e) => {
          if (otherProps.isphone) {
            const value = e.target.value;
            e.target.value = "+995 " + maskData(value, "5");
          }

          setValue(e.target.value);
        }}
      />
      <svg
        width="22"
        height="19"
        viewBox="0 0 22 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={InputStyles.ValidationIcon}
        {...(isSubmitClicked &&
          errors[otherProps.name] && {
            style: {
              ...InputStyles.ValidationIcon,
              ...{ display: "block", right: "-38px" },
            },
          })}
      >
        <path
          d="M21.1906 15.6251L12.95 1.37506C12.7527 1.03234 12.4686 0.747668 12.1262 0.549724C11.7839 0.351781 11.3954 0.247559 11 0.247559C10.6045 0.247559 10.2161 0.351781 9.87374 0.549724C9.53139 0.747668 9.24727 1.03234 9.04999 1.37506L0.80936 15.6251C0.609173 15.966 0.502786 16.3539 0.500999 16.7493C0.499213 17.1447 0.602092 17.5336 0.79919 17.8763C0.996287 18.2191 1.28058 18.5036 1.62321 18.701C1.96583 18.8984 2.35458 19.0015 2.74999 19.0001H19.25C19.6454 19.0015 20.0341 18.8984 20.3768 18.701C20.7194 18.5036 21.0037 18.2191 21.2008 17.8763C21.3979 17.5336 21.5008 17.1447 21.499 16.7493C21.4972 16.3539 21.3908 15.966 21.1906 15.6251ZM10.25 7.75006C10.25 7.55115 10.329 7.36038 10.4697 7.21973C10.6103 7.07908 10.8011 7.00006 11 7.00006C11.1989 7.00006 11.3897 7.07908 11.5303 7.21973C11.671 7.36038 11.75 7.55115 11.75 7.75006V11.5001C11.75 11.699 11.671 11.8897 11.5303 12.0304C11.3897 12.171 11.1989 12.2501 11 12.2501C10.8011 12.2501 10.6103 12.171 10.4697 12.0304C10.329 11.8897 10.25 11.699 10.25 11.5001V7.75006ZM11 16.0001C10.7775 16.0001 10.56 15.9341 10.375 15.8105C10.19 15.6868 10.0458 15.5111 9.96062 15.3056C9.87547 15.1 9.85319 14.8738 9.8966 14.6556C9.94001 14.4374 10.0472 14.2369 10.2045 14.0796C10.3618 13.9222 10.5623 13.8151 10.7805 13.7717C10.9987 13.7283 11.2249 13.7505 11.4305 13.8357C11.6361 13.9208 11.8118 14.065 11.9354 14.25C12.059 14.4351 12.125 14.6526 12.125 14.8751C12.125 15.1734 12.0065 15.4596 11.7955 15.6706C11.5845 15.8815 11.2984 16.0001 11 16.0001Z"
          fill="#F02424"
        />
      </svg>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={InputStyles.ValidationIcon}
        {...(isSubmitClicked &&
          !errors[otherProps.name] && {
            style: {
              ...InputStyles.ValidationIcon,
              ...{ display: "block", right: "0px" },
            },
          })}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 0.75C4.44375 0.75 0.75 4.44375 0.75 9C0.75 13.5562 4.44375 17.25 9 17.25C13.5562 17.25 17.25 13.5562 17.25 9C17.25 4.44375 13.5562 0.75 9 0.75ZM12.576 7.605C12.6418 7.52973 12.692 7.44205 12.7234 7.34713C12.7549 7.2522 12.7671 7.15194 12.7592 7.05224C12.7513 6.95254 12.7236 6.85542 12.6777 6.7666C12.6317 6.67777 12.5685 6.59903 12.4917 6.53501C12.4148 6.47098 12.326 6.42297 12.2303 6.3938C12.1347 6.36462 12.0341 6.35487 11.9347 6.36512C11.8352 6.37537 11.7388 6.40541 11.6511 6.45347C11.5634 6.50154 11.4862 6.56666 11.424 6.645L8.199 10.5142L6.53025 8.84475C6.3888 8.70813 6.19935 8.63254 6.0027 8.63424C5.80605 8.63595 5.61794 8.71483 5.47889 8.85389C5.33983 8.99294 5.26095 9.18105 5.25924 9.3777C5.25754 9.57435 5.33313 9.7638 5.46975 9.90525L7.71975 12.1553C7.79344 12.2289 7.88167 12.2864 7.97881 12.324C8.07595 12.3617 8.17987 12.3787 8.28395 12.374C8.38803 12.3693 8.48998 12.3429 8.58331 12.2966C8.67663 12.2503 8.75929 12.185 8.826 12.105L12.576 7.605Z"
          fill="#98E37E"
        />
      </svg>

      <p style={InputStyles.HelperText}>{otherProps.helpertext}</p>
    </div>
  );
}

const InputStyles = {
  HelperText: {
    marginTop: "8px",
    color: "#2E2E2E",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "14px",
    lineHeight: "21px",
  },

  DefaultInput: {
    outline: "none",
    marginTop: "8px",
    padding: "13px 16px",
    width: "100%",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "21px",
    border: "1px solid #BCBCBC",
    borderRadius: "4px",
    backgroundColor: "#FFFFFF",
    caretColor: "#6499FF",
    color: "#000000",
  },
  Label: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "21px",
  },
  ValidationIcon: {
    display: "none",
    position: "absolute",
    top: "48px",
    // right: "-38px",
  },
  // SuccessIcon: {
  //   position: "absolute",
  //   top: "48px",
  //   right: "15px",
  // },
};

export default React.forwardRef(Input);
