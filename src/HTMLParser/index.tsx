import React, { useContext, useEffect, useRef, useState } from "react";
import { convertToPDF } from "./utils";
import PdfViewer from "../components/pdfPreview";
import TextArea from "../components/textArea";
import Button from "../components/Button";
import { Form, FormElement, TextAreaPanel, ViewerContainer } from "./styled";
import { ButtonVariants } from "../components/Button/variants";
import Tabs, { TabsProps } from "../components/Tabs";
import VariableSection from "./VariableSection";
import { DropdownItem } from "../components/Select";
import { Button as ModalButton, Modal } from "antd";
import styled from "styled-components";
const StyledModal = styled(Modal)`
  .ant-modal-header {
    background-color: #c10000;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    height: 37px;
    padding: 7px;
    margin: 0;
    font-family: "Montserrat", "Mukta", sans-serif
  }
  .ant-modal-title {

    color: white;
  }
  .ant-modal-body, .ant-modal-footer {
    padding: 7px;
    margin-top: 0;
    background-color: ${(props) => props.theme.colors?.primary};
    color: ${(props) => props.theme.colors?.text};
  }
  .ant-modal-content {
    font-weight: bold;
    padding: 0;
    font-family: "Montserrat", "Mukta", sans-serif;
    font-weight: 400;
  }
  .ant-modal-close {
    color: white;
    top: 7px;
  }
  .ant-modal {
    top: 35%;
  }
`;

const HTMLParser = () => {
  const [pdfUrl, setPdfUrl] = useState("");
  const [htmlText, setHTMLText] = useState(`<html>
  <head>
    <title>Href Attribute Example</title>
  </head>
  <body>
    <h1>Href Attribute Example</h1>
    <p>
Name: <span th:text=\"\${name}\"></span>
Age: <span th:text=\"\${age}\"></span>
Address: <span th:text=\"\${address}\"></span>
      <a href="https://www.freecodecamp.org/contribute/">The freeCodeCamp Contribution Page</a> shows you how and where you can contribute to freeCodeCamp's community and growth.
    </p>
  </body>
</html>`);
  const [variables, setVariables] = useState<DropdownItem[]>([]);
  const [variableObj, setVariableObj] = useState<any>({});
  const [htmlError, setHTMLError] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    generateVariables();
  }, [htmlText]);

  const generateVariables = () => {
    const matches = htmlText.match(/\{([^}]+)\}/g);
    const textsWithinCurlyBraces =
      matches?.map((match) => match.slice(1, -1)) || [];
    const varOptions = textsWithinCurlyBraces.map((text) => ({
      label: text,
      value: text,
    }));
    setVariables(varOptions);
  };

  const generatePdf = async () => {
    const url = await convertToPDF(htmlText, variableObj, setHTMLError);
    if (url) {
      setPdfUrl(url);
    }
  };

  const onChangeHTML = (value: string = "") => {
    setHTMLText(value);
  };

  const onChangeVariable = (key, value) => {
    if (key) {
      const updatedObj = { ...variableObj, [key]: value };
      setVariableObj(updatedObj);
    }
  };

  const updateVariableThroughJSON = (varObj: any) => {
    setVariableObj(varObj);
  };
  const deleteVariable = (key) => {
    if (key && variableObj[key]) {
      const updatedObj = { ...variableObj };
      delete updatedObj[key];
      setVariableObj(updatedObj);
    }
  };

  const closeError = () => {
    setHTMLError("");
  };
  const tabs: TabsProps["tabs"] = [
    {
      label: "HTML Content",
      content: (
        <TextArea ref={textAreaRef} value={htmlText} onChange={onChangeHTML} />
      ),
      onSelectTab: () => textAreaRef?.current?.focus(),
    },
    {
      label: "Dynamic Variables",
      content: (
        <VariableSection
          options={variables}
          onChangeVariable={onChangeVariable}
          variableObject={variableObj}
          deleteVariable={deleteVariable}
          updateVariableThroughJSON={updateVariableThroughJSON}
        />
      ),
    },
  ];

  return (
    <div style={{ padding: "1rem" }}>
      <span>
        Insert dynamic values to html templates and Preview the output PDF
      </span>
      <Form>
        <FormElement>
          <div style={{ height: "67vh", minWidth: "400px" }}>
            <Tabs tabs={tabs} />
          </div>
          <TextAreaPanel>
            <Button
              disabled={!htmlText}
              onClick={generatePdf}
              buttonText="Convert"
              variant={ButtonVariants.NORMAL}
              borderRadius="0"
            />
          </TextAreaPanel>
        </FormElement>
        <FormElement>
          {pdfUrl && (
            <ViewerContainer>
              <PdfViewer pdfUrl={pdfUrl} />
            </ViewerContainer>
          )}
        </FormElement>
      </Form>
      <StyledModal
        title="Error"
        open={!!htmlError}
        onOk={closeError}
        onCancel={closeError}
        footer={[
          <Button
            onClick={() => {
              closeError();
            }}
            variant={ButtonVariants.NORMAL}
            buttonText="OK"
          >
          </Button>,
        ]}
      >
        {htmlError}
      </StyledModal>
    </div>
  );
};

export default HTMLParser;
