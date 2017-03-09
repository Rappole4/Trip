# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create([{email: 'cam@nycda.com',password:'FluffyBunny',status: :active,fname: 'Cam',lname: 'Crews'}])

Journey.create([
  {
    duration: 20,
    start_address: '90 John St',
    end_address: '125 6th Avenue'
  }
])
UserJourney.create([
  {
    user_id: 1,
    journey_id: 1
  }
])