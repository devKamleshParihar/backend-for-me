import Mongoose,{Schema,model} from 'mongoose'

import  mongooseAggregate from 'mongoose-aggregate-paginate-v2'

const videoSchema = new Schema(
    {
        videoFile:{
            type:String,    //cloud
        },
        thumbnail:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        duration:{
            type:Number,
        },
        views:{
            type:Number,
        },
        isPublish:{
            type:Boolean,
        },
    },
    {
        timestamps:true
    }
)

videoSchema.plugin(mongooseAggregate)

 export const videoModel = Mongoose.model('Video',videoSchema)