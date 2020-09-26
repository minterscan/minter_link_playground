import { mPrefixToHex } from 'minterjs-util'
import { pubToAddress } from 'ethereumjs-util/dist/account'
import { addHexPrefix, toBuffer, bufferToHex } from 'ethereumjs-util/dist/bytes'
import { hashPersonalMessage, ecrecover, fromRpcSig } from 'ethereumjs-util/dist/signature'

export default class AuthService {
  static set (wallet, value) {
    localStorage.setItem(wallet, value)
  }

  static get (wallet) {
    return localStorage.getItem(wallet)
  }

  static clear (wallet) {
    localStorage.removeItem(wallet)
  }

  static verifySignature (wallet, signature) {
    const msg = 'Hello Minter'
    const buf = toBuffer(addHexPrefix(Buffer.from(msg).toString('hex')))
    const msgHash = hashPersonalMessage(buf)
    const sigParams = fromRpcSig(signature)
    const publicKey = ecrecover(msgHash, sigParams.v, sigParams.r, sigParams.s)
    const address = pubToAddress(publicKey)

    return mPrefixToHex(wallet) === bufferToHex(address)
  }
}
