    @date_suggestions.each do |date|
        json.set! date.id do 
            json.partial! "datesuggestion", date: date
        end
    end


    # <------ works somewhat --------->
    # @date_suggestions.each do |date|
    #     json.set! date.id do 
    #         json.partial! (date, :id)
    #     end
    # end
    # <------ works somewhat --------->