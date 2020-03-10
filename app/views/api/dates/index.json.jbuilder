
    @dates.each do |date|
        json.set! date.id do 
            json.partial! "date", date: date
        end
    end
