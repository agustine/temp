/**
 * Created by Yexiaoyi on 2014/10/24.
 */


UserCenter.MainModel = Backbone.Model.extend({
    isAuthed: function(){
        if(this.get('user'))
            return true;
        return false;
    },
    isActived: function(){
        return this.get('user') && this.get('user').actived;
    },
    setUser: function(user){
        this.set('user', user);
        return this;
    }
});