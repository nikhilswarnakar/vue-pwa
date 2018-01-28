import Vue from 'vue'
import Hello from '@/components/Hello'

//require('jasmine-vue');

describe('Hello.vue', () => {

  // Inspect the raw component options
  it('has a created hook', () => {
    expect(typeof Hello.created).to.equal('function')
  })
  

  // Evaluate the results of functions in
 // the raw component options
  it('sets the correct default data', () => {
    expect(typeof Hello.data).to.equal('function')
    const defaultData = Hello.data()
    expect(defaultData.message).to.equal('hello!')
  })

    // Inspect the component instance on mount
    it('correctly sets the message when created', () => {
      const vm = new Vue(Hello).$mount()
      expect(vm.message).to.equal('bye!')
    })


  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
