# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ActiveRecord::Base.transaction do
    require 'csv'
    User.destroy_all
    DateSuggestion.destroy_all
    
    require 'faker'
    include Faker


# 1
date1example = DateSuggestion.create(
    title: "Example 1",
    location: "Lauren Wilkinson",
    date_type: 'run',
    cost: "low",
    date_number: "date 1",
    description: "American Spy is her story, written in 1992 in the first person as a diary for her young twin sons to read when they're older. The action spans the thirty preceding years—from the Cuban Missile Crisis to the `New World Order` following the end of the Cold War. Marie is the younger of two sisters.",
    approximate_date_length: "2-3 Hr's",
)

#date suggestions
csv_text = File.read(Rails.root.join('lib', 'seeds', 'Date_Ideas.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
    t = DateSuggestion.new
    t.title = row['Date Title (I.e Terra Linda Sleepy Hollow Hike)'] # string
    t.location = row['Location (I.e San Rafael or Marina District)'] # string
    t.date_type = row['Type of Date'] # string
    t.cost = row['How expensive?'] # integer
    t.date_number = row['Which date do you think this would be good for? (Would you take someone to this date on Date #X?)'] #integer
    t.description = row['Add a short or long description as to why this is a good date!'] #text
    t.approximate_date_length = row['Approximate Time Length of Date'] # string
    t.save
end



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
