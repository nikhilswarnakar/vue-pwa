import Vue from 'vue'
import LeaveUpdate from '@/components/LeaveUpdate'

describe('LeaveUpdate.vue', () => {

  //Inspect the raw component options
  it('has a created hook', () => {
    expect(typeof LeaveUpdate.created).to.equal('function')
  })

  it('has mounted', () => {
    expect(typeof LeaveUpdate.mounted).to.equal('function')
  })

})