import { jsx, css } from '@emotion/core';
import React, { Fragment } from 'react';
import { useTransition, animated } from 'react-spring';

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    width: 3rem;\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    width: 2.5rem;\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    width: 1.75rem;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  padding: 0;\n  border-radius: 50%;\n  svg {\n    margin: 0;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    height: 3rem;\n    font-size: 1.125rem;\n    padding: 0 1.5rem;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    height: 2.5rem;\n    font-size: 1rem;\n    padding: 0 1rem;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    height: 1.75rem;\n    font-size: 0.75rem;\n    padding: 0 0.875rem;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    background: none;\n    color: #20c997;\n    svg {\n      fill: #20c997;\n    }\n    &:hover:enabled {\n      background: #e6fcf5;\n    }\n    &:active:enabled {\n      background: #c3fae8;\n    }\n    &:disabled {\n      color: #bcd9d0;\n      svg {\n        fill: #bcd9d0;\n      }\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    background: #e9ecef;\n    color: #343a40;\n    svg {\n      fill: #343a40;\n    }\n    &:hover:enabled {\n      background: #f1f3f5;\n    }\n    &:active:enabled {\n      background: #dee2e6;\n    }\n    &:disabled {\n      color: #c6d3e1;\n      svg {\n        fill: #c6d3e1;\n      }\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background: #20c997;\n    color: white;\n    svg {\n      fill: white;\n    }\n    &:hover:enabled {\n      background: #38d9a9;\n    }\n    &:active:enabled {\n      background: #12b886;\n    }\n    &:disabled {\n      background: #aed9cc;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  outline: none;\n  border: none;\n  box-sizing: border-box;\n  border-radius: 0.25rem;\n  line-height: 1;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  &:focus {\n    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);\n  }\n  &:disabled {\n    cursor: not-allowed;\n  }\n  svg {\n    width: 1em;\n    margin-right: 1em;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */
var Button = function Button(_ref) {
  var children = _ref.children,
      theme = _ref.theme,
      size = _ref.size,
      disabled = _ref.disabled,
      width = _ref.width,
      iconOnly = _ref.iconOnly,
      onClick = _ref.onClick;
  return jsx("button", {
    css: [style, themes[theme], sizes[size], {
      width: width
    }, iconOnly && [iconOnlyStyle, iconOnlySizes[size]]],
    disabled: disabled,
    onClick: onClick
  }, children);
};

Button.defaultProps = {
  theme: "primary",
  size: "medium"
};
var style = css(_templateObject());
var themes = {
  primary: css(_templateObject2()),
  secondary: css(_templateObject3()),
  tertiary: css(_templateObject4())
};
var sizes = {
  small: css(_templateObject5()),
  medium: css(_templateObject6()),
  big: css(_templateObject7())
};
var iconOnlyStyle = css(_templateObject8());
var iconOnlySizes = {
  small: css(_templateObject9()),
  medium: css(_templateObject10()),
  big: css(_templateObject11())
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  justify-content: flex-end;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}

/**
 * 여러개의 `Button` 컴포넌트를 보여주고 싶거나, 버튼을 우측에 정렬하고 싶을 땐 `ButtonGroup` 컴포넌트를 사용하세요.
 */
var ButtonGroup = function ButtonGroup(_ref) {
  var direction = _ref.direction,
      rightAlign = _ref.rightAlign,
      children = _ref.children,
      gap = _ref.gap,
      className = _ref.className;
  return jsx("div", {
    css: [{
      display: "flex",
      flexDirection: direction
    }, gapStyle(direction, gap), rightAlign && rightAlignStyle],
    className: className
  }, children);
};

ButtonGroup.defaultProps = {
  direction: "row",
  gap: "0.5rem"
}; // direction 에 따라 margin-left 또는 margin-top 설정

var gapStyle = function gapStyle(direction, gap) {
  var marginType = direction === "row" ? "marginLeft" : "marginTop";
  return css({
    "button + button": _defineProperty({}, marginType, gap)
  });
};

var rightAlignStyle = css(_templateObject$1());

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  border-radius: 4px;\n  width: 25rem;\n  background: white;\n  box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);\n  padding: 2rem;\n  h3 {\n    font-size: 1.5rem;\n    color: #343a40;\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n  p {\n    font-size: 1.125rem;\n    margin: 0;\n    color: #868e96;\n  }\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n  z-index: 15;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.5);\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}

var Dialog = function Dialog(_ref) {
  var visible = _ref.visible,
      title = _ref.title,
      description = _ref.description,
      hideButtons = _ref.hideButtons,
      cancellable = _ref.cancellable,
      cancelText = _ref.cancelText,
      confirmText = _ref.confirmText,
      children = _ref.children,
      onCancel = _ref.onCancel,
      onConfirm = _ref.onConfirm;
  var fadeTransition = useTransition(visible, null, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    }
  });
  var slideUpTransition = useTransition(visible, null, {
    from: {
      transform: "translateY(200px) scale(0.8)",
      opacity: 0
    },
    enter: {
      transform: "translateY(0px) scale(1)",
      opacity: 1
    },
    leave: {
      transform: "translateY(200px) scale(0.8)",
      opacity: 0
    },
    config: {
      tension: 200,
      friction: 15
    }
  });
  return jsx(Fragment, null, fadeTransition.map(function (_ref2) {
    var item = _ref2.item,
        key = _ref2.key,
        props = _ref2.props;
    return item ? jsx(animated.div, {
      css: [fullscreen, darkLayer],
      key: key,
      style: props
    }) : null;
  }), slideUpTransition.map(function (_ref3) {
    var item = _ref3.item,
        key = _ref3.key,
        props = _ref3.props;
    return item ? jsx(animated.div, {
      css: [fullscreen, whiteBoxWrapper],
      style: props,
      key: key
    }, jsx("div", {
      css: whiteBox
    }, title && jsx("h3", null, title), description && jsx("p", null, description), children, !hideButtons && jsx(ButtonGroup, {
      css: {
        marginTop: "3rem"
      },
      rightAlign: true
    }, cancellable && jsx(Button, {
      theme: "tertiary",
      onClick: onCancel
    }, cancelText), jsx(Button, {
      onClick: onConfirm
    }, confirmText)))) : null;
  }));
};

Dialog.defaultProps = {
  cancelText: "취소",
  confirmText: "확인"
};
var fullscreen = css(_templateObject$2());
var darkLayer = css(_templateObject2$1());
var whiteBoxWrapper = css(_templateObject3$1());
var whiteBox = css(_templateObject4$1());

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _ref =
/*#__PURE__*/
React.createElement("path", {
  d: "M24 20.188l-8.315-8.209 8.2-8.282L20.188 0l-8.212 8.318L3.666.115 0 3.781l8.321 8.24-8.206 8.313L3.781 24l8.237-8.318 8.285 8.203z"
});

var SvgExit = function SvgExit(props) {
  return React.createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _ref);
};

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

var _ref$1 =
/*#__PURE__*/
React.createElement("path", {
  d: "M18 1l-6 4-6-4-6 5v7l12 10 12-10V6z"
});

var SvgHeart = function SvgHeart(props) {
  return React.createElement("svg", _extends$1({
    width: 24,
    height: 24
  }, props), _ref$1);
};

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

var _ref$2 =
/*#__PURE__*/
React.createElement("path", {
  d: "M7.127 22.564L.001 24l1.438-7.125 5.688 5.689zM2.853 15.46l5.688 5.689 15.46-15.46L18.312 0 2.853 15.46z"
});

var SvgPencil = function SvgPencil(props) {
  return React.createElement("svg", _extends$2({
    width: 24,
    height: 24
  }, props), _ref$2);
};



var icons = /*#__PURE__*/Object.freeze({
  __proto__: null,
  exit: SvgExit,
  heart: SvgHeart,
  pencil: SvgPencil
});

/** @jsx jsx */

/** 아이콘을 보여주고 싶을 땐 `Icon` 컴포넌트를 사용하세요.
 *
 * 이 컴포넌트는 svg 형태로 아이콘을 보여주며, props 또는 스타일을 사용하여 아이콘의 색상과 크기를 정의 할 수 있습니다.
 *
 * 스타일로 모양새를 설정 할 때에는 `color`로 색상을 설정하고 `width`로 크기를 설정하세요.
 */
var Icon = function Icon(_ref) {
  var icon = _ref.icon,
      color = _ref.color,
      size = _ref.size,
      className = _ref.className;
  var SVGIcon = icons[icon];
  return jsx(SVGIcon, {
    css: {
      fill: color || "currentColor",
      width: size,
      height: "auto"
    },
    className: className
  });
};

export { Button, ButtonGroup, Dialog, Icon };
