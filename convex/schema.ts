import { defineSchema, defineTable } from 'convex/server'
import { v } from "convex/values"

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    image: v.optional(v.string()),
    clerkId: v.string(),
  }).index("by_clerk_id", ["clerkId"]),

  plans: defineTable({
    userId: v.id("user"),
    name: v.string(),
    workoutPlan: v.object({
      schadule: v.array(v.string()),
      exercises: v.array(v.object({
        day: v.string(),
        routines: v.array(v.object({
          name: v.string(),
          sets: v.optional(v.number()),
          reps: v.optional(v.number()),
          duration: v.optional(v.string()),
          description: v.optional(v.string()),
          exercises: v.optional(v.array(v.string())),
        }))
      }))
    })
  })
})