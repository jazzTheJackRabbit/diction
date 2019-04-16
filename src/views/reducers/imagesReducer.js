export default function(state = null, action){		
	switch(action.type){
		case "GET_IMAGES":
			return {
				"result": 
					[
						"http://assets0.chictopia.com/photos/TwelveThirtyFour/10687674526/coat_400.jpg",
						"http://assets0.chictopia.com/photos/blonderedhead/10206362925/pink-h-m-shirt-green-forever-21-shorts-gray-dolce-vita-shoes-silver-vintag_400.jpg",
						"http://assets0.chictopia.com/photos/blonderedhead/2803501698/3612870173/pink-h-m-shirt-green-forever-21-shorts-gray-dolce-vita-shoes-silver-vintag_400.jpg",
						"http://assets0.chictopia.com/photos/blonderedhead/2803501698/3050630930/pink-h-m-shirt-green-forever-21-shorts-gray-dolce-vita-shoes-silver-vintag_400.jpg",
						"http://assets0.chictopia.com/photos/blonderedhead/2803501698/5139389937/pink-h-m-shirt-green-forever-21-shorts-gray-dolce-vita-shoes-silver-vintag_400.jpg",
						"http://assets0.chictopia.com/photos/cayleem/8829702881/silver-h-m-dress-black-new-york-company-purse-black-forever-21-boots-blu_400.jpg",
						"http://assets0.chictopia.com/photos/cayleem/8829702881/2273429593/silver-h-m-dress-black-new-york-company-purse-black-forever-21-boots-blu_400.jpg",
						"http://assets0.chictopia.com/photos/love_aesthetics/5517159752/blue-thrifted-dress-black-thrifted-shoes-black-thrifted-belt-black-thrifte_400.jpg",
						"http://assets0.chictopia.com/photos/love_aesthetics/5517159752/7505096237/blue-thrifted-dress-black-thrifted-shoes-black-thrifted-belt-black-thrifte_400.jpg",
						"http://assets0.chictopia.com/photos/irisanddaniel/1420321252/red-forever-21-coat-red-el-dorado-blazer-red-h-m-shirt-red-american-appare_400.jpg",
						"http://assets0.chictopia.com/photos/irisanddaniel/1420321252/8978664355/red-forever-21-coat-red-el-dorado-blazer-red-h-m-shirt-red-american-appare_400.jpg"
					]
			}
	}	

	return state
}