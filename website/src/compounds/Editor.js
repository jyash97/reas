import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { ifProp } from "styled-tools";
import debounce from "lodash/debounce";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/jsx/jsx";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import ConfigContainer from "../containers/ConfigContainer";

const StyledCodeMirror = styled(CodeMirror)`
  .CodeMirror {
    font-family: "Fira Code", monospace;
    background-color: rgb(0, 0, 0, 0.05) !important;
    padding: 1em;
    height: auto;
    max-width: 100%;
    margin-bottom: 2em;

    .CodeMirror-scroll {
      margin-bottom: -35px;
      margin-right: -35px;
    }

    .CodeMirror-lines {
      font-size: 16px;
      line-height: 1.4;

      @media (max-width: 768px) {
        font-size: 14px;
      }

      .CodeMirror-line {
        white-space: pre-wrap;
      }
    }

    ${ifProp(
      "options.readOnly",
      css`
        .CodeMirror-cursor {
          display: none;
        }
      `
    )};
  }
`;

class Editor extends React.Component {
  static propTypes = {
    code: PropTypes.string.isRequired,
    readOnly: PropTypes.bool,
    onChange: PropTypes.func
  };

  shouldComponentUpdate() {
    return true;
  }

  handleChange = debounce((editor, metadata, newCode) => {
    const { onChange } = this.props;
    if (typeof onChange === "function") {
      onChange(newCode);
    }
  }, 10);

  render() {
    const { code, readOnly } = this.props;
    return (
      <ConfigContainer>
        {({ editorConfig }) => (
          <StyledCodeMirror
            value={code}
            onChange={this.handleChange}
            options={{ ...editorConfig, theme: "dracula", readOnly }}
          />
        )}
      </ConfigContainer>
    );
  }
}

export default Editor;
