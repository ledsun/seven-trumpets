import test from 'ava'
import getSecondFriday from '../lib/getSecondFriday'

test('getSecondFriday returns 13 at 2017 Jan', t => {
  t.is(13, getSecondFriday(new Date(2017, 0)))
})

test('getSecondFriday returns 10 at 2017 Feb', t => {
  t.is(10, getSecondFriday(new Date(2017, 1)))
})

test('getSecondFriday returns 10 at 2017 March', t => {
  t.is(10, getSecondFriday(new Date(2017, 2)))
})

test('getSecondFriday returns 10 at 2017 April', t => {
  t.is(14, getSecondFriday(new Date(2017, 3)))
})

test('getSecondFriday returns 10 at 2017 May', t => {
  t.is(12, getSecondFriday(new Date(2017, 4)))
})

test('getSecondFriday returns 10 at 2017 June', t => {
  t.is(9, getSecondFriday(new Date(2017, 5)))
})

test('getSecondFriday returns 13 at 2017 July', t => {
  t.is(14, getSecondFriday(new Date(2017, 6)))
})

test('getSecondFriday returns 10 at 2017 Aug', t => {
  t.is(11, getSecondFriday(new Date(2017, 7)))
})

test('getSecondFriday returns 10 at 2017 Sep', t => {
  t.is(8, getSecondFriday(new Date(2017, 8)))
})

test('getSecondFriday returns 10 at 2017 Oct', t => {
  t.is(13, getSecondFriday(new Date(2017, 9)))
})

test('getSecondFriday returns 10 at 2017 Nov', t => {
  t.is(10, getSecondFriday(new Date(2017, 10)))
})

test('getSecondFriday returns 10 at 2017 Dec', t => {
  t.is(8, getSecondFriday(new Date(2017, 11)))
})
