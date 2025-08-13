import { asset } from '$app/paths'

const defaultData = { contact: '', phone: '' }

interface Options {
    first: number,
    second: number
}

function rotateCharCodes(offset: number, raw: string): string {
  return raw.split('')
      .map(char => char.charCodeAt(0))
      .map(charCode => charCode + offset)
      .map(charCode => String.fromCharCode(charCode))
      .join('')
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function encode(raw: string, options: Options): string {
  const encoded = rotateCharCodes(options.second, btoa(rotateCharCodes(options.first, raw)))
  console.log(encoded)
  return encoded
}

function decode(raw: string, options: Options): string {
  try {
    return rotateCharCodes(-1 * options.first, atob(rotateCharCodes(-1 * options.second, raw)))
  } catch (e) {
    console.error(e)
    return ''
  }
}

export async function loadObfuscated() {
  try {
    const response = await fetch(asset('/obfuscated.json'))
    if (response.status === 200) {
      const { contact } = await response.json()
      return {
        contact: decode(contact.value, contact.options)
      }
    }
    return defaultData
  } catch (e) {
    console.error(e)
    return defaultData
  }
}