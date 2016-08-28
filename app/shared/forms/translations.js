let translator = {
  t: key => key
}

let functionName = 't'

export function setTranslator(translationObject, translateMethod='t') {
  translator = translationObject
  functionName = translateMethod
}

export function t(key) {
  return translator[functionName](key)
}

