import React, { ChangeEventHandler, useEffect, useState } from "react";
import Dropdown, { DropdownItem } from "../components/Select";
import Select from "react-select";
import { Flex1, FlexParent } from "../styled";
import Button from "../components/Button";
import { ButtonVariants } from "../components/Button/variants";
import Input from "../components/TextField";
import IconButton from "../components/Button/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faClose,
  faDownload,
  faIndent,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  ButtonGroup,
  SelectContainer,
  ValueSection,
  VariableSections,
} from "./styled";
import TextArea from "../components/textArea";
import { useTheme } from "styled-components";

enum Views {
  FORM = "form",
  JSON = "json",
}

interface VariableProps {
  options: DropdownItem[];
  variableObject: any;
  onChangeVariable: (key: string, value: string) => void;
  deleteVariable: (key: string) => void;
  updateVariableThroughJSON: (obj: any) => void;
}
interface VariableAddSectionProps {
  variable?: string;
  isNewSection?: boolean;
  options: DropdownItem[];
  variableObject: any;
  onChangeVariable: (key: string, value: string) => void;
  deleteVariable: (key: string, isNewSection?: boolean) => void;
}

const VariableAdditionSection = ({
  variable,
  options,
  variableObject = {},
  onChangeVariable,
  isNewSection = false,
  deleteVariable,
}: VariableAddSectionProps) => {
  const theme = useTheme();
  const [keyValue, setKeyValue] = useState({
    key: variable,
    value: variableObject[variable],
  });

  const onChangeDropdown = (option: DropdownItem) => {
    setKeyValue({ ...keyValue, key: option?.label });
  };

  const onChangeText = (event) => {
    setKeyValue({ ...keyValue, value: event.target.value });
  };
  const remainingOptions = options.filter(
    (option) => !variableObject[option.label] || option.label === variable
  );
  const selectedOption = options.filter(
    (option) => option.label === keyValue.key
  );
  const saveValue = () => {
    onChangeVariable(keyValue.key, keyValue.value);
  };
  const value = variableObject[variable];
  const isValid = keyValue.key && keyValue.value;
  return (
    <FlexParent>
      <SelectContainer>
        <Select
          value={selectedOption}
          isClearable={true}
          isSearchable={true}
          options={remainingOptions}
          onChange={onChangeDropdown}
          isDisabled={!isNewSection}
          placeholder="Select key"
          components={{
            IndicatorSeparator: () => null,
          }}
          styles={{
            clearIndicator: (provided) => ({
              ...provided,
              padding: "2px",
            }),
            dropdownIndicator: (provided) => ({
              ...provided,
              padding: "2px",
            }),
            menu: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              borderColor: theme.colors.text
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: `1px solid ${theme.colors.text}`
            }),
            singleValue: (provided) => ({
              ...provided,
              color: theme.colors.text,
            }),
            option: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              color: theme.colors.text,
              ":hover": {
                backgroundColor: theme.colors.primaryVariant,
              }
            }),
          }}
        />
      </SelectContainer>
      <ValueSection>
        {keyValue.key && (
          <Input value={value} onChange={onChangeText} hasError={false} />
        )}
      </ValueSection>
      <ButtonGroup>
        <div>
          <IconButton
            bgColor={"green"}
            hoverColor="darkgreen"
            onClick={saveValue}
            disabled={!isValid}
          >
            <FontAwesomeIcon icon={faCheck} style={{ color: "#FFF" }} />
          </IconButton>
        </div>
        <div>
          <IconButton
            bgColor={"red"}
            hoverColor="darkred"
            onClick={() => deleteVariable(keyValue.key)}
          >
            <FontAwesomeIcon icon={faClose} style={{ color: "#FFF" }} />
          </IconButton>
        </div>
      </ButtonGroup>
    </FlexParent>
  );
};

const VariableSection: React.FC<VariableProps> = ({
  options,
  variableObject = {},
  onChangeVariable,
  deleteVariable,
  updateVariableThroughJSON,
}: VariableProps) => {
  const theme = useTheme();
  const [showAddNew, setshowAddNew] = useState(true);
  const [view, setView] = useState<string>(Views.JSON);
  const [jsonValue, setJSONValue] = useState<string>(
    JSON.stringify(variableObject)
  );

  const getParsedJSONObj = (jsonValue: string) => {
    try {
      const newObj = JSON.parse(jsonValue);
      return newObj;
    } catch (e) {
      return false;
    }
  }

  const enableSaveButton = () => {
    try {
      const newObj = getParsedJSONObj(jsonValue);

      return newObj && JSON.stringify(newObj) !== JSON.stringify(variableObject);
    } catch (e) {
      return false;
    }
  };

  const prettifyJSON = () => {
    try{
      const obj = getParsedJSONObj(jsonValue);
      const string = JSON.stringify(obj, undefined, 2);
      obj && setJSONValue(string);
    } catch(e) {
      return false;
    }
  }

  useEffect(() => {
    setJSONValue(JSON.stringify(variableObject));
  }, [variableObject]);

  const saveVariable = (key: string, value: string) => {
    onChangeVariable(key, value);
    setshowAddNew(true);
  };

  const deleteKey = (key: string, isNewSection: boolean) => {
    if (!isNewSection) {
      deleteVariable(key);
    }
    setshowAddNew(true);
  };

  const onChangeJSON = (value: string) => {
    setJSONValue(value);
  };

  const saveJSON = () => {
    updateVariableThroughJSON(JSON.parse(jsonValue));
  };
  const ViewOptions = [
    { label: "JSON Object", value: Views.JSON, Icon: " { } " },
    {
      label: "Form",
      value: Views.FORM,
      Icon: <FontAwesomeIcon icon={faListCheck} />,
    },
  ];
  const remainingOptions = options.filter(
    (option) => !variableObject[option.label]
  );
  const selectedView = ViewOptions.filter((View) => View.value === view)?.[0];

  const getVariables = () => {
    const content = options.map(option => option.label).join('\n')
    const blob = new Blob([content], {
      type: "text/plain;charset=utf-8"
     });
     const url = window.URL.createObjectURL(blob);
     const a = document.createElement("a");
     document.body.appendChild(a);
     a.style.display = "none";
     a.href = url;
     a.download = "Variables List";
     a.click();
     window.URL.revokeObjectURL(url)
  };
  return (
    <div style={{ height: "100%" }}>
      <div
        style={{
          width: "100%",
          fontSize: "14px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: `1px solid ${theme.colors.text}`,
        }}
      >
        <div style={{ display: "flex", marginLeft: "5px" }} title={"Download Variables List as Text File"}>
          <IconButton
          
            bgColor={theme.colors.secondary}
            color={theme.colors.secondaryText}
            hoverColor={theme.colors.secondaryVariant}
            onClick={getVariables}
            padding="5px"
            borderRadius="0px"
            border={`1px solid ${theme.colors.secondaryText}`}
            fontSize="14px"
          >
            <FontAwesomeIcon icon={faDownload} style={{ color: "#FFF" }} /> Get
            Variables List
          </IconButton>
        </div>
        <div style={{ display: "flex", marginLeft: "5px" }}>
          <IconButton
            bgColor={theme.colors.secondary}
            color={theme.colors.secondaryText}
            hoverColor={theme.colors.secondaryVariant}
            onClick={prettifyJSON}
            padding="5px"
            borderRadius="0px"
            border={`1px solid ${theme.colors.secondaryText}`}
            fontSize="14px"
          >
            <FontAwesomeIcon icon={faIndent} style={{ color: "#FFF" }} /> 
            Prettify JSON
          </IconButton>
        </div>
        <div style={{ display: "flex", marginRight: "5px" }}>
          {ViewOptions.map(({ Icon, label, value }) => (
            <div
              style={{ paddingTop: "4px", paddingBottom: "4px" }}
              title={`Edit as ${label}`}
            >
              <IconButton
                bgColor={
                  selectedView.label === label
                    ? theme.colors.secondaryVariant
                    : theme.colors.secondary
                }
                color={theme.colors.secondaryText}
                hoverColor={theme.colors.secondaryVariant}
                onClick={() => setView(value)}
                padding="5px"
                borderRadius="0px"
                border={`1px solid ${theme.colors.secondaryText}`}
                fontSize="14px"
              >
                {Icon}
              </IconButton>
            </div>
          ))}
        </div>
      </div>
      {(view === Views.JSON && (
        <>
          <div
            style={{
              borderBottom: `5px solid ${theme.colors.text}`,
              height: "calc(100% - 6rem)",
            }}
          >
            <TextArea value={jsonValue} onChange={onChangeJSON} />
          </div>
          <ButtonGroup
            style={{
              width: "auto",
              display: "flex",
              justifyContent: "end",
              padding: "10px",
            }}
          >
            <IconButton
              bgColor={"red"}
              color={"white"}
              hoverColor="darkred"
              onClick={() => {}}
              padding="10px"
            >
              <FontAwesomeIcon icon={faClose} style={{ color: "#FFF" }} />{" "}
              Discard Changes
            </IconButton>
            <IconButton
              bgColor={"green"}
              color={"white"}
              hoverColor="darkgreen"
              onClick={saveJSON}
              padding="10px"
              disabled={!enableSaveButton()}
              margin="0 0 0 5px"
            >
              <FontAwesomeIcon icon={faCheck} style={{ color: "#FFF" }} /> Save
              Changes
            </IconButton>
          </ButtonGroup>
        </>
      )) || (
        <VariableSections>
          {Object.keys(variableObject)?.map((key) => {
            return (
              <VariableAdditionSection
                key={key}
                variable={key}
                options={options}
                variableObject={variableObject}
                deleteVariable={deleteKey}
                onChangeVariable={saveVariable}
              />
            );
          })}
          {showAddNew && remainingOptions.length > 0 ? (
            <div style={{ padding: "5px" }}>
              <Button
                variant={ButtonVariants.NORMAL}
                buttonText="Add New Variable"
                onClick={() => setshowAddNew(false)}
              />
            </div>
          ) : (
            <VariableAdditionSection
              options={options}
              variableObject={variableObject}
              onChangeVariable={saveVariable}
              deleteVariable={deleteKey}
              isNewSection
            />
          )}
        </VariableSections>
      )}
    </div>
  );
};

export default VariableSection;
