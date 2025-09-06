# 하네뜨 플레인 요거트 설탕양 계산기 개발 가이드

이 가이드는 다른 컴퓨터에서 '하네뜨 플레인 요거트 설탕양 계산기' 프로젝트 개발을 이어서 진행하기 위한 단계별 지침입니다. 운영체제(OS) 환경 차이도 고려하여 작성되었습니다.

---

## 1. 개발 환경 설정 (최초 1회)

새로운 컴퓨터에서 개발을 시작하기 전에 필요한 도구들을 설치합니다.

### 1.1 Git 설치 확인 및 설치
*   **확인:** 터미널(macOS/Linux) 또는 Git Bash(Windows)를 열고 `git --version`을 입력하여 Git이 설치되어 있는지 확인합니다.
*   **설치:** 설치되어 있지 않다면, [Git 공식 웹사이트](https://git-scm.com/downloads)에서 OS에 맞는 버전을 다운로드하여 설치합니다.

### 1.2 Node.js 및 npm 설치 확인 및 설치
*   **확인:** 터미널에서 `node -v`와 `npm -v`를 입력하여 Node.js와 npm(Node Package Manager)이 설치되어 있는지 확인합니다.
    *   **참고:** 이 프로젝트는 Node.js 20.19.0 이상 또는 22.12.0 이상을 권장합니다. (`npm run build` 시 경고가 발생했었습니다.)
*   **설치:** 설치되어 있지 않다면, [Node.js 공식 웹사이트](https://nodejs.org/en/download/)에서 LTS(Long Term Support) 버전을 다운로드하여 설치합니다. npm은 Node.js와 함께 설치됩니다.

---

## 2. 프로젝트 가져오기 (Clone)

GitHub에서 프로젝트 코드를 컴퓨터로 가져옵니다.

1.  **프로젝트 저장소 URL 복사:**
    `https://github.com/jaehwan-lee-benja/sugar-calculator.git`
2.  **터미널 열기:** 개발할 폴더로 이동합니다. (예: `cd ~/Documents/Projects`)
3.  **프로젝트 클론:** 다음 명령어를 입력하여 프로젝트를 가져옵니다.
    ```bash
    git clone https://github.com/jaehwan-lee-benja/sugar-calculator.git
    ```
4.  **프로젝트 폴더로 이동:** 클론된 프로젝트 폴더로 이동합니다.
    ```bash
    cd sugar-calculator
    ```

---

## 3. CLI 실행 및 개발 시작

이제 이 CLI(Gemini)를 실행하고 개발을 시작할 준비가 되었습니다.

### 3.1 CLI 실행
1.  **현재 프로젝트 폴더(`sugar-calculator`)에서** 다음 명령어를 입력하여 Gemini CLI를 실행합니다.
    ```bash
    # Gemini CLI를 실행하는 명령어 (사용자님의 환경에 따라 다를 수 있습니다. 예: gemini-cli start)
    # 이 명령어는 사용자님이 Gemini CLI를 어떻게 설치하고 실행하는지에 따라 달라집니다.
    # 일반적으로 'gemini-cli' 또는 'gemini'와 같은 명령어로 실행됩니다.
    # 만약 이 명령어를 모른다면, Gemini CLI 설치 문서를 참조하거나,
    # 이 대화창을 다시 시작하여 "안녕하세요"라고 입력하면 CLI가 자동으로 시작될 수 있습니다.
    ```
    *   **참고:** 이 CLI는 현재 `sugar-calculator` 폴더를 프로젝트 루트로 인식합니다.

### 3.2 개발 환경 설정 (CLI 내부)
CLI가 실행되면, 프로젝트 내부의 Node.js 환경을 설정합니다.

1.  **CLI에게 Node.js 프로젝트 폴더로 이동 지시:**
    ```
    cd sugar-calculator-pwa
    ```
    *   **설명:** 이 명령은 CLI에게 React 프로젝트가 있는 `sugar-calculator-pwa` 폴더로 작업 디렉토리를 변경하도록 지시합니다.
2.  **의존성 설치:**
    ```
    npm install
    ```
    *   **설명:** 프로젝트에 필요한 모든 라이브러리(React, Bootstrap 등)를 설치합니다. 이전에 발생했던 npm 캐시/권한 문제가 발생할 경우, CLI가 해결 방법을 안내할 것입니다.

### 3.3 개발 서버 실행 (선택 사항)
코드 수정 사항을 실시간으로 확인하고 싶을 때 개발 서버를 실행합니다.

1.  **개발 서버 실행:**
    ```
    npm run dev
    ```
    *   **설명:** 개발 서버를 시작하고, 코드를 수정하면 자동으로 브라우저에 반영됩니다. 터미널에 표시되는 URL(예: `http://localhost:5173`)로 접속하여 확인합니다.

---

## 4. 코드 수정 및 기능 추가

이제 `sugar-calculator-pwa/src/App.tsx` 파일 등을 수정하여 기능을 추가하거나 변경할 수 있습니다.

*   **CLI에게 수정 지시:** CLI에게 어떤 파일을 어떻게 수정할지 구체적으로 지시합니다. (예: `read_file` 도구로 파일 내용을 읽고, `replace` 도구로 수정)
*   **예시:**
    ```
    read_file absolute_path='/Users/사용자이름/sugar-calculator/sugar-calculator-pwa/src/App.tsx'
    # 파일 내용을 확인한 후
    replace file_path='/Users/사용자이름/sugar-calculator/sugar-calculator-pwa/src/App.tsx' old_string='기존 내용' new_string='새로운 내용'
    ```
    *   **참고:** `absolute_path`는 사용자님의 컴퓨터에 맞는 절대 경로로 변경해야 합니다.

---

## 5. 변경 사항 배포 (GitHub Pages)

수정된 코드를 GitHub Pages에 반영하여 모바일에서 확인합니다.

1.  **CLI에게 배포 지시:**
    ```
    npm run deploy
    ```
    *   **설명:** 이 명령은 프로젝트를 빌드하고, GitHub 저장소의 `gh-pages` 브랜치로 푸시하여 웹사이트를 업데이트합니다.
    *   **확인:** 배포 후 `https://jaehwan-lee-benja.github.io/sugar-calculator/` 에서 변경 사항을 확인합니다. (반영까지 몇 분 소요될 수 있으며, 브라우저 캐시를 지워야 할 수도 있습니다.)

---

## 6. 소스 코드 변경 사항 커밋 및 푸시

로컬에서 수정한 소스 코드(`App.tsx`, `App.css` 등)를 GitHub 저장소의 `main` 브랜치에 기록하고 업로드합니다.

1.  **CLI에게 커밋 지시:**
    ```
    git add .
    git commit -m "feat: [변경 내용 요약]"
    ```
    *   **설명:** `git add .`는 변경된 모든 파일을 커밋 준비 상태로 만들고, `git commit`은 로컬 저장소에 변경 내용을 기록합니다.
2.  **CLI에게 푸시 지시:**
    ```
    git push origin main
    ```
    *   **설명:** 로컬 저장소에 기록된 커밋들을 GitHub의 `main` 브랜치로 업로드합니다.

---

이 가이드를 통해 다른 환경에서도 원활하게 개발을 이어나가실 수 있기를 바랍니다. 궁금한 점이 있다면 언제든지 다시 질문해주세요!
