import React, { useRef, useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { FaRegTimesCircle } from "react-icons/fa";

const Modal = ({ setIsModalOpen }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  // 데이터 추가 (id는 자동 생성됨)
  const addData = async (value) => {
    let item = await addDoc(collection(db, "apply"), {
      email: value,
    }).then(setIsSuccess(true));
    return item;
  };
  const inputEmail = useRef(null);
  const [validation, setValidation] = useState("");
  const handleCheck = () => {
    let value = inputEmail.current.value;
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === "" || value === null) {
      inputEmail.current.classList.add("fail");
      setValidation("이메일을 작성하세요");
    } else if (!emailReg.test(value)) {
      inputEmail.current.classList.add("fail");
      setValidation("이메일 양식을 올바르게 작성하세요");
      console.log(inputEmail);
    } else {
      addData(value);
      inputEmail.current.classList.remove("fail");
      setValidation("");
    }
  };
  return (
    <div className="modal">
      <div className="modal-content">
        {!isSuccess ? (
          <>
            <h2 className="modal-content-title">신청까지 단 3초!</h2>
            <p>
              저희의 서비스는 현재 열심히 개발되고 있습니다.
              <br /> 완성되는 즉시 여러분께 소식을 전해드릴 예정입니다. <br />
              <br />
              이를 위해 귀하의 이메일을 작성하여 신청부탁드립니다. <br />
            </p>
            <div className="modal-form">
              <div className="modal-form-box">
                <input
                  ref={inputEmail}
                  type="email"
                  id="email"
                  placeholder="이메일을 작성해주세요"
                  required
                />
                <span className="validation">{validation}</span>
              </div>
              <button className="submit" onClick={handleCheck}>
                신청하기
              </button>
            </div>
            <span className="notice">* 메일 발송만을 위해 사용됩니다 *</span>
          </>
        ) : (
          <>
            <h2 className="modal-content-title">신청완료</h2>
            <p>
              빠른 시일 내에 완성하여 회신 드리겠습니다.
              <br />
              저희 서비스에 관심 가져주셔서 진심으로 감사드립니다.
            </p>
          </>
        )}

        <button
          className="button-close"
          onClick={() => {
            setIsModalOpen(false);
            setIsSuccess(false);
          }}
        >
          <FaRegTimesCircle />
          <span className="blind">닫기</span>
        </button>
      </div>
    </div>
  );
};

export default Modal;
