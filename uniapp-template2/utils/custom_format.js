// 153****0730
export const formatEncryptPhone = (phone) => {
	if (!phone) return ''
	let newPhone = String(phone).replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
	return newPhone
}

// 153 xxxx xxxx
export const formatGapPhone = (phone) => {
	if (!phone) return ''
	let newPhone = String(phone).replace(/\s/g, '').replace(/(\d{3})(\d{0,4})(\d{0,4})/, '$1 $2 $3')
	return newPhone
}

// 1234 5678 9012 3456 789
export const formatGapCardNo = (cardNo) => {
	return String(cardNo).replace(/(\d{4})/g, "$1 ").trim()
}

/**
 * 筛选字段
 * fieldCustom { 'a': '订单量' }
 * fieldService { 'a': 1, 'b': 2 }
 * => { '订单量': 1 }
 */
export const formatField = (fieldCustom, fieldService) => {
	const fieldKeys = Object.keys(fieldCustom)
	let newField = {}
	
	fieldKeys.forEach(item => {
		newField[fieldCustom[item]] = fieldService[item]
	})
	
	return newField
}
