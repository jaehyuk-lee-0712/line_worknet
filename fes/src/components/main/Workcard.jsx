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
                <th>고용지원금 대상자 여부</th>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <th>소속 기관명 기재</th>
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
          <span>워크넷에서 구직인증기간 만료확인 꼭 해주세요.</span>
        </div>
        {/* worknet_wrap */}
      </div>
      {/* //ability_wrap 보유 자격증 & 고용지금원 대상자 여부 끝 */}

      <div className="ability2_wrap">
        <div className="language_wrap">
          <div className="language_title">
            <span>외국어 능력</span>
            <div className="language_add">
              <IoAddSharp />
              <span>추가</span>
            </div>
          </div>
          {/* language_title */}

          <thead className="language_list_wrap">
            <div className="language_list">
              <tr>
                <th></th>
                <th>상</th>
                <th>중</th>
                <th>하</th>
              </tr>

              <tr>
                <th>영어</th>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>

              <tr>
                <th>중국어</th>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>

              <tr>
                <th>일본어</th>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
            </div>
          </thead>
        </div>
        {/* language_wrap 외국어 능력표 */}

        <div className="computer_wrap">
          <div className="computer_title">
            <span>컴퓨터 능력</span>
            <div className="computer_add">
              <IoAddSharp />
              <span>추가</span>
            </div>
          </div>
          {/* computer_title */}

          <thead className="computer_list_wrap">
            <div className="computer_list">
              <tr>
                <th></th>
                <th>상</th>
                <th>중</th>
                <th>하</th>
              </tr>

              <tr>
                <th>엑셀</th>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>

              <tr>
                <th>파워포인트</th>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>

              <tr>
                <th>워드</th>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
            </div>
          </thead>
        </div>
        {/* computer_wrap 컴퓨터 능력표 */}
      </div>
      {/* ability2_wrap 외국어 능력표 컴퓨터 능력표 끝*/}

      <div className="labor_wrap">
        <div className="labor_title">
          <span>수료 후 희망 근무 조건</span>
        </div>

        <table className="labor_list_wrap">
          <thead className="labor_list">
            <tr>
              <th>희망근무지역</th>
              <td className="textarea" contentEditable="true" id="content"></td>
              <td className="textarea" contentEditable="true" id="content"></td>
              <td className="textarea" contentEditable="true" id="content"></td>
            </tr>

            <tr>
              <th>취업희망분야</th>
              <td className="textarea" contentEditable="true" id="content"></td>
              <th>희망급여수준</th>
              <td className="textarea" contentEditable="true" id="content"></td>
              <td>
                <input type="checkbox" />
                <span>회사내규에 따름</span>
              </td>
            </tr>

            <tr>
              <th>가능 고용형태</th>
              <td>
                <input type="checkbox" />
                <span>정규직</span>
              </td>
              <td>
                <input type="checkbox" />
                <span>계약직</span>
              </td>
              <td>
                <input type="checkbox" />
                <span>인턴직</span>
              </td>
              <td>
                <input type="checkbox" />
                <span>아르바이트</span>
              </td>
            </tr>

            <tr>
              <th>가능 근무형태</th>
              <td>
                <input type="checkbox" />
                <span>주5일</span>
              </td>
              <td>
                <input type="checkbox" />
                <span>주6일</span>
              </td>
              <td>
                <input type="checkbox" />
                <span>격주휴무</span>
              </td>
            </tr>

            <tr>
              <th>가능 근무시간</th>
              <td>
                <input type="checkbox" />
                <span>주간</span>
              </td>
              <td>
                <input type="checkbox" />
                <span>야간</span>
              </td>
              <td>
                <input type="checkbox" />
                <span>심야</span>
              </td>
            </tr>

            <tr>
              <th>훈련생 요청 사항</th>
              <td className="textarea" contentEditable="true" id="content"></td>
            </tr>
          </thead>
        </table>
        {/* labor_list_wrap */}
      </div>
      {/* labor_card  취업 관리 사항표*/}

      <div className="management_wrap">
        <div className="management_title">
          <span>취업관리사항</span>
        </div>
        {/* management_title */}

        <div className="management_list_wrap">
          <thead className="management_list">
            <tr>
              <th>업체명</th>
              <td className="textarea" contentEditable="true" id="content"></td>
              <th>사업자등록번호</th>
              <td className="textarea" contentEditable="true" id="content"></td>
            </tr>
            <tr>
              <th>취업확인서</th>
              <td>
                <input type="checkbox" />
                <span>작성</span>
              </td>
              <td>
                <input type="checkbox" />
                <span>미작성</span>
              </td>
            </tr>
            <tr>
              <th>사업장 주소</th>
              <td className="textarea" contentEditable="true" id="content"></td>
            </tr>
            <tr>
              <th>연락처</th>
              <td className="textarea" contentEditable="true" id="content"></td>
              <th>근무직종</th>
              <td className="textarea" contentEditable="true" id="content"></td>
            </tr>
            <tr>
              <th>고용보험 유무</th>
              <td>
                <input type="checkbox" />
                <span>고용보험 가입</span>
              </td>
              <td>
                <input type="checkbox" />
                <span>고용보험 미가입</span>
              </td>
            </tr>
            <tr>
              <th>취업일</th>
              <td className="textarea" contentEditable="true" id="content"></td>
            </tr>
          </thead>
        </div>
      </div>

      <div className="workcard_btn">
        <button>수정하기</button>
        <button>취소하기</button>
      </div>
    </div>
  );
};

export default Workcard;
