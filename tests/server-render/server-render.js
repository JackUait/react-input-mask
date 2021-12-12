/* global describe, it */

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { expect } from 'chai'
import InputElement from '../../index'

describe('Test prerender', () => {
	it('should return a string', () => {
		const result = ReactDOMServer.renderToString(
			<InputElement value='some' mask='799' />
		)
		expect(typeof result).to.equal('string')
	})
})
