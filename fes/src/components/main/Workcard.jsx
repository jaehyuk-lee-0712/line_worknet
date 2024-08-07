import React from "react";
import { IoAddSharp } from "react-icons/io5";

const Workcard = () => {
  return (
    <div id="workcard_wrap">
      <div className="workcard_head">
        <span>취업 지원 카드</span>
      </div>
      <div className="individual_card">
        <table className="individual_detail">
          <thead className="detail_inner">
            <tr>
              <th>성명</th>
              <td className="textarea" contentEditable="true" id="content">
                김춘식
              </td>
              <th>성별</th>
              <td className="textarea" contentEditable="true" id="content">
                남자
              </td>
            </tr>
            <tr>
              <th>폰전화번호</th>
              <td className="textarea" contentEditable="true" id="content">
                010-1111-1111
              </td>
              <th>집전화번호</th>
              <td className="textarea" contentEditable="true" id="content"></td>
            </tr>
            <tr>
              <th>생년월일</th>
              <td className="textarea" contentEditable="true" id="content">
                960721
              </td>
              <th>상세주소</th>
              <td className="textarea" contentEditable="true" id="content">
                제주특별자치도 제주시 첨단로242
              </td>
            </tr>
            <tr>
              <th>최종학력</th>
              <td className="textarea" contentEditable="true" id="content">
                서울대학교
              </td>
              <th>전공</th>
              <td className="textarea" contentEditable="true" id="content">
                소프트웨어공학과
              </td>
            </tr>
            <tr>
              <th>훈련과정명</th>
              <td>
                (스마트웹&콘텐츠개발)[B.L]웹표준기반
                스마트UI/UX디자인&웹퍼블리셔_A
              </td>
              <th>교욱기간</th>
              <td>2024-03-18 ~ 2024-09-02</td>
            </tr>
            <tr>
              <th>수료일</th>
              <td></td>
              <th>제적일</th>
              <td></td>
            </tr>
          </thead>
        </table>
      </div>
      {/* individual_card */}

      <div className="carrer_card">
        <div className="carrer_title">
          <span>경력사항</span>
          <div className="carrer_add">
            <IoAddSharp />
            <span>추가</span>
          </div>
        </div>
      </div>
      {/* carrer_card */}

      <table className="carrer_list_wrap">
        <thead className="carrer_list">
          <tr>
            <th>근무처</th>
            <th>근무기간</th>
            <th>직위</th>
            <th>담당업무</th>
            <th>급여수준</th>
          </tr>
          <tr>
            <td className="textarea" contentEditable="true" id="content"></td>
            <td className="textarea" contentEditable="true" id="content"></td>
            <td className="textarea" contentEditable="true" id="content"></td>
            <td className="textarea" contentEditable="true" id="content"></td>
            <td className="textarea" contentEditable="true" id="content"></td>
          </tr>
          <tr>
            <td className="textarea" contentEditable="true" id="content"></td>
            <td className="textarea" contentEditable="true" id="content"></td>
            <td className="textarea" contentEditable="true" id="content"></td>
            <td className="textarea" contentEditable="true" id="content"></td>
            <td className="textarea" contentEditable="true" id="content"></td>
          </tr>
          <tr>
            <td className="textarea" contentEditable="true" id="content"></td>
            <td className="textarea" contentEditable="true" id="content"></td>
            <td className="textarea" contentEditable="true" id="content"></td>
            <td className="textarea" contentEditable="true" id="content"></td>
            <td className="textarea" contentEditable="true" id="content"></td>
          </tr>
        </thead>
      </table>
      {/* carrer_list_wrap */}

      <div className="ability_wrap">
        {/* ability_wrap  */}
        <div className="license_wrap">
          <div className="license_title">
            <span>보유자격증</span>
            <div className="license_add">
              <IoAddSharp />
              <span>추가</span>
            </div>
          </div>

          <table className="license_list_wrap">
            <thead className="license_list">
              <tr>
                <th></th>
                <th>자격증명</th>
              </tr>
              <tr>
                <th>1</th>
                <td
                  className="textarea"
                  contentEditable="true"
                  id="content"
                ></td>
              </tr>
              <tr>
                <th>2</th>
                <td
                  className="textarea"
                  contentEditable="true"
                  id="content"
                ></td>
              </tr>
              <tr>
                <th>3</th>
                <td
                  className="textarea"
                  contentEditable="true"
                  id="content"
                ></td>
              </tr>
            </thead>
          </table>
        </div>
        {/* license_wrap */}

        <div className="worknet_wrap">
          <table className="worknet_list_wrap">
            <thead className="worknet_list">
              <tr>
                <th></th>
                <th>예</th>
                <th>아니오</th>
              </tr>
              <tr>
                <th rowSpan={2}></th>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <th>고용지원금 대상자 여부</th>
                <td
                  className="textarea"
                  contentEditable="true"
                  id="content"
                ></td>
              </tr>
              <tr>
                <th>워크넷 취업활동 여부</th>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
            </thead>
          </table>
        </div>
        {/* worknet_wrap */}
      </div>
    </div>
  );
};

export default Workcard;
