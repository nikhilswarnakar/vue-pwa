import Vue from 'vue'
import TotalCount from '@/components/TotalCount'

describe('TotalCount.vue', () => {

  //Inspect the raw component options
  it('has a created hook', () => {
    expect(typeof TotalCount.created).to.equal('function')
  })

  it('has mounted', () => {
    expect(typeof TotalCount.mounted).to.equal('function')
  })

})