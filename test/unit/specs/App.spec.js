import Vue from 'vue'
import App from '@/App'

describe('App.vue', () => {

  // Inspect the raw component options
  // it('has a created hook', () => {
  //   expect(typeof Hello.created).to.equal('function')
  // })
  
  //Inspect the raw component options
  it('has a created hook', () => {
    expect(typeof App.created).to.equal('function')
  })

  it('has mounted', () => {
    expect(typeof App.mounted).to.equal('function')
  })
  // Evaluate the results of functions in
 // the raw component options
  it('sets the correct default data', () => {
    expect(typeof App.data).to.equal('function')
    const defaultData = App.data()
    expect(defaultData.title).to.equal('App')
  })

  //   // Inspect the component instance on mount
  //   it('correctly sets the message when created', () => {
  //     const vm = new Vue(Hello).$mount()
  //     expect(vm.message).to.equal('bye!')
  //   })


  // it('should render correct contents', () => {
  //   const Constructor = Vue.extend(Hello)
  //   const vm = new Constructor().$mount()
  //   expect(vm.$el.querySelector('.hello h1').textContent)
  //     .to.equal('Welcome to Your Vue.js App')
  // })
})