#!flask/bin/python
from flask import Flask, jsonify, abort, make_response, request, url_for, render_template
import requests
import json
from xml.etree import ElementTree

app = Flask(__name__)
API_KEY = 'dcb9b6a7-806a-4206-ac12-f493747414d6'
DICTIONARY_URL='http://www.dictionaryapi.com/api/v1/references/collegiate/xml/{}?key={}'

########### UTILITY ###########
def parse_definitions(xml_response):
	root = ElementTree.fromstring(xml_response.content)
	
	definition_sets = []

	for xml_entry in root.findall('entry'):
	    definition_set = {}
	    definition_set['id'] = xml_entry.attrib['id']
	    definition_set['part_of_speech'] = xml_entry.find('fl').text
	    xml_definition_sets = xml_entry.findall('def')
	    definition_set['definitions'] = []
	    for xml_definition_set in xml_definition_sets:
	        xml_definitions = xml_definition_set.findall('dt')
	        for xml_definition in xml_definitions:
	            definition_set['definitions'].append(xml_definition.text)	    
	    definition_sets.append(definition_set)

	return definition_sets

########### API ROUTES ###########
# Get word definition
@app.route('/define/<word>', methods=['GET'])
def lookup(word):
	response = parse_definitions(requests.get(DICTIONARY_URL.format(word,API_KEY)))	
	return jsonify(response)

########### FRONT-END CATCH ALL ROUTES ###########
# Index
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
	return render_template('index.html')

############ END ROUTES ###########
if __name__ == '__main__':
	app.run(debug=True)


