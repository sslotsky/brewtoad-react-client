let translator = {
  t: key => key
}

let functionName = 't';

export function setTranslator(t, functionName='t') {
  translator = t
  functionName = functionName
}

export function t(key) {
  return translator[functionName](key)
}

