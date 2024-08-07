// 건의함 글 쓰기

import React, { useState } from "react";

const Suggestion3 = () => {

  const [fileList, setFileList] = useState([]);

  const handleFileChange = (event) => {
    setFileList([...event.target.files]);
  };

  return (
    <div id="suggestion3_wrap">
      <div className="suggestion_head">
        <span>1대 1 건의/문의</span>
      </div>
      <div className="suggestion_title">
        <span>내 문의 현황</span>
      </div>
      <table className="suggestion_question1">
        <thead className="suggestion_answer1">
          <tr>
            <th>문의 유형</th>
            <td className="question_type">
              <select name="category" id="selectId">
                <option value="0" selected="selected">
                  선택
                </option>
                <option value="1000">건의사항</option>
                <option value="1010">홈페이지 관련</option>
                <option value="1020">개인정보</option>
                <option value="1030">기타</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>제목</th>
            <td>
              <input
                type="text"
                className="ipt_full"
                id="title"
                maxLength={100}
              />
            </td>
          </tr>
          <tr>
            <th>내용</th>
            <td>
              <div
                className="textarea"
                contentEditable="true"
                id="content"
              ></div>
            </td>
          </tr>
        <tr>
      <th>첨부 파일</th>
      <td>
        <div className="file_list" id="file_list">
          {fileList.map((file, index) => (
            <p className="file" key={index}>{file.name}</p>
          ))}
        </div>
        <label className="sel_file">
          파일 선택
          <input
            type="file"
            multiple
            id="file_upload"
            name="file_upload[]"
            accept=".jpg, .jpeg, .png, .gif, .pdf"
            onChange={handleFileChange}
          />
        </label>
        <ul className="noti">
          <li>- 첨부파일 형식은 jpg, jpeg, png, gif, pdf 만 가능합니다.</li>
        </ul>
      </td>
    </tr>
        </thead>
      </table>
      <div className="support_btn">
        <button className="btn_ok">문의 등록</button>
        <button className="btn_cancel">취소</button>
      </div>
    </div>
  );
};

export default Suggestion3;
