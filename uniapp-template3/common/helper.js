// ========================格式化
// 999999 => ¥999,999.00
export const filerFormatMoney = (num, options = { style: 'currency', currency: 'CNY' }) => {
	if (!num) return ''
	return (Number(num)).toLocaleString('zh-CN', options)
}

// 153****0730
export const filerEncryptPhone = (phone) => {
	if (!phone) return ''
	let newPhone = String(phone).replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
	return newPhone
}

// 153 xxxx xxxx
export const filerFormatPhone = (phone) => {
	if (!phone) return ''
	let newPhone = String(phone).replace(/\s/g, '').replace(/(\d{3})(\d{0,4})(\d{0,4})/, '$1 $2 $3')
	return newPhone
}

// 1234 5678 9012 3456 789
export const filerFormatCardNo = (cardNo) => {
	return String(cardNo).replace(/(\d{4})/g, "$1 ").trim()
}
