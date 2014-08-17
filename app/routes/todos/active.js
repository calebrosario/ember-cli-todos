// routes/todos/active.js
import Ember from 'ember';
export default Ember.Route.extend({
  model: function(){
    return this.store.filter('todo', active);
  }
});

function active(todo) {
  return !todo.get('isCompleted');
}
