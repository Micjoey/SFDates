# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ActiveRecord::Base.transaction do
    
    User.destroy_all
    DateSuggestion.destroy_all
    
    require 'faker'
    include Faker


# 1
date1example = DateSuggestion.create(
    title: "Example 1",
    location: "Lauren Wilkinson",
    date_type: 'run',
    cost: 5,
    date_number: 1,
    description: "American Spy is her story, written in 1992 in the first person as a diary for her young twin sons to read when they're older. The action spans the thirty preceding years—from the Cuban Missile Crisis to the `New World Order` following the end of the Cold War. Marie is the younger of two sisters.",
)


#users
i = 0
while i <= 3 do
    if i ==0
        test = User.create(username: "Lord Fitzgerald", email: "LordFitzgerald@gmail.com", password: "password")
    else
        test = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: "password")
    end
    i += 1
end

  
end
