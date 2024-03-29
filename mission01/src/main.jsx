import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

const createRegister = function () {
  return (
    <div class="register-wrapper">
      <h2 class="register-title">회원가입</h2>
      <div class="register-content">
        <div class="must">
          <strong>*</strong>
          <span>필수입력사항</span>
        </div>
        <div class="wrapper info">
          <div class="wrapper id">
            <div class="left">
              <label for="id">
                <span>아이디</span>
                <strong>*</strong>
              </label>
            </div>
            <div class="middle">
              <input type="text" id="id" placeholder="아이디를 입력해주세요." />
              <p class="message format">
                6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합
              </p>
            </div>
            <div class="right">
              <button class="check-availability">중복확인</button>
            </div>
          </div>
          <div class="wrapper pwd">
            <div class="left">
              <label for="pwd">
                <span>비밀번호</span>
                <strong>*</strong>
              </label>
            </div>
            <div class="middle">
              <input
                type="password"
                id="pwd"
                placeholder="비밀번호를 입력해주세요."
              />
              <p class="message length">최소 10자 이상 입력</p>
              <p class="message format">
                영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합
              </p>
            </div>
            <div class="right"></div>
          </div>
          <div class="wrapper pwd-again">
            <div class="left">
              <label for="pwd-again">
                <span>비밀번호 확인</span>
                <strong>*</strong>
              </label>
            </div>
            <div class="middle">
              <input
                type="password"
                id="pwd-again"
                placeholder="비밀번호를 한 번 더 입력해주세요."
              />
              <p class="message fill">비밀번호를 한 번 더 입력해주세요.</p>
              <p class="message format">동일한 비밀번호를 입력해주세요.</p>
            </div>
            <div class="right"></div>
          </div>
          <div class="wrapper name">
            <div class="left">
              <label for="name">
                <span>이름</span>
                <strong>*</strong>
              </label>
            </div>
            <div class="middle">
              <input type="text" id="name" placeholder="이름을 입력해주세요." />
              <p class="message fill">이름을 입력해주세요.</p>
            </div>
            <div class="right"></div>
          </div>
          <div class="wrapper email">
            <div class="left">
              <label for="email">
                <span>이메일</span>
                <strong>*</strong>
              </label>
            </div>
            <div class="middle">
              <input
                type="text"
                id="email"
                placeholder="예: marketkurly@kurly.com"
              />
              <p class="message format">이메일 형식으로 입력해주세요.</p>
              <p class="message fill">이메일을 입력해주세요.</p>
            </div>
            <div class="right">
              <button class="check-availability">중복확인</button>
            </div>
          </div>
          <div class="wrapper phone">
            <div class="left">
              <label for="phone">
                <span>휴대폰</span>
                <strong>*</strong>
              </label>
            </div>
            <div class="middle">
              <input
                type="text"
                id="phone"
                placeholder="숫자만 입력해주세요."
                maxlength="11"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
              />
              <p class="message fill">휴대폰 번호를 입력해주세요.</p>
            </div>
            <div class="right">
              <button class="get-code">인증번호 받기</button>
            </div>
          </div>
          <div class="wrapper address">
            <div class="left">
              <span>주소</span>
              <strong>*</strong>
            </div>
            <div class="middle">
              <button class="search-address">주소 검색</button>
              <p>배송지에 따라 상품 정보가 달라질 수 있습니다.</p>
            </div>
            <div class="right"></div>
          </div>
          <div class="wrapper gender">
            <div class="left">
              <span>성별</span>
            </div>
            <div class="middle">
              <label for="male" class="male">
                <input type="radio" id="male" name="gender" />
                <span class="radio"></span>
                <span>남자</span>
              </label>
              <label for="female" class="female">
                <input type="radio" id="female" name="gender" />
                <span class="radio"></span>
                <span>여자</span>
              </label>
              <label for="do-not-choose" class="do-not-choose">
                <input type="radio" id="do-not-choose" name="gender" />
                <span class="radio"></span>
                <span>선택안함</span>
              </label>
            </div>
            <div class="right"></div>
          </div>
          <div class="wrapper birth">
            <div class="left">
              <span>생년월일</span>
            </div>
            <div class="middle">
              <div class="input-wrapper">
                <input
                  type="text"
                  id="year"
                  placeholder="YYYY"
                  maxlength="4"
                  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                />
                <span>/</span>
                <input
                  type="text"
                  id="month"
                  placeholder="MM"
                  maxlength="2"
                  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                />
                <span>/</span>
                <input
                  type="text"
                  id="day"
                  placeholder="DD"
                  maxlength="2"
                  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                />
              </div>
              <p class="message year format">
                태어난 연도를 다시 확인해주세요.
              </p>
              <p class="message month format">태어난 월을 다시 확인해주세요.</p>
              <p class="message day format">태어난 일을 다시 확인해주세요.</p>
              <p class="message fill">태어난 년도, 월, 일을 모두 채워주세요.</p>
            </div>
            <div class="right"></div>
          </div>
          <div class="wrapper additional">
            <div class="left">
              <span>추가입력 사항</span>
            </div>
            <div class="middle">
              <label for="referral-id" class="referral-id">
                <input type="radio" id="referral-id" name="add" />
                <span class="radio"></span>
                <span>친구초대 추천인 아이디</span>
              </label>
              <label for="event-name" class="event-name">
                <input type="radio" id="event-name" name="add" />
                <span class="radio"></span>
                <span>참여 이벤트명</span>
              </label>
            </div>
            <div class="right"></div>
          </div>
        </div>
        <div class="wrapper agree">
          <div class="left">
            <span>이용약관동의</span>
            <strong>*</strong>
          </div>
          <div class="right">
            <div class="wrapper agree-all">
              <label for="agree-all">
                <input type="checkbox" id="agree-all" />
                <span class="checkbox"></span>
                <span>전체 동의합니다.</span>
              </label>
              <p>
                선택항목에 등의하지 않은 경우도 회원가입 및 일반적인 서비스를
                이용할 수 있습니다.
              </p>
            </div>
            <div class="wrapper agree-use">
              <label for="agree-use">
                <input type="checkbox" id="agree-use" />
                <span class="checkbox"></span>
                <span>이용약관 동의</span>
                <em>&nbsp;(필수)</em>
              </label>
              <a href="" class="view-terms">
                {" "}
                약관보기&nbsp;{" "}
              </a>
            </div>
            <div class="wrapper agree-personal">
              <label for="agree-personal">
                <input type="checkbox" id="agree-personal" />
                <span class="checkbox"></span>
                <span>개인정보 수집 · 이용 동의</span>
                <em>&nbsp;(필수)</em>
              </label>
              <a href="" class="view-terms">
                {" "}
                약관보기&nbsp;{" "}
              </a>
            </div>
            <div class="wrapper agree-benefits">
              <label for="agree-benefits">
                <input type="checkbox" id="agree-benefits" />
                <span class="checkbox"></span>
                <span>무료배송, 할인쿠폰 등 혜택/정보 수신 동의</span>
                <em>&nbsp;(선택)</em>
              </label>
              <a href="" class="view-terms">
                {" "}
                약관보기&nbsp;{" "}
              </a>
            </div>
            <div class="wrapper agree-age">
              <label for="agree-age">
                <input type="checkbox" id="agree-age" />
                <span class="checkbox"></span>
                <span>본인은 만 14세 이상입니다.</span>
                <em>&nbsp;(필수)</em>
              </label>
              <a href="" class="view-terms">
                {" "}
                약관보기&nbsp;{" "}
              </a>
            </div>
          </div>
        </div>
        <button onclick="location.href=''" class="register" type="submit">
          가입하기
        </button>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
const reactDomRoot = createRoot(rootElement);

reactDomRoot.render(createRegister());
