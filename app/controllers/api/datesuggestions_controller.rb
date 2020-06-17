
class Api::DatesuggestionsController < ApplicationController
    def index
        if (params[:date_number])
            @date_suggestions = DateSuggestion.where(date_number: params[:date_number])
        elsif(params[:location])
            @date_suggestions = DateSuggestion.where(location: params[:location])
        elsif(params[:date_type])
            @date_suggestions = DateSuggestion.where(date_type: params[:date_type])
        elsif(params[:cost])
            @date_suggestions = DateSuggestion.where(cost: params[:cost])
        else
            @date_suggestions = DateSuggestion.all
        end
        render :index
    end


    def show
        if (params[:date_number])
            @date_suggestions = DateSuggestion.where(date_number: params[:date_number])
        elsif(params[:location])
            @date_suggestions = DateSuggestion.where(location: params[:location])
        elsif(params[:date_type])
            @date_suggestions = DateSuggestion.where(date_type: params[:date_type])
        elsif(params[:cost])
            @date_suggestions = DateSuggestion.where(cost: params[:cost])
        else
            @date_suggestion = DateSuggestion.find(params[:id])
        end
        # @date_suggestion = DateSuggestion.find(params[:id])
        # render "api/datesuggestion/:id"
        render :show
    end

    # def date_number
    #     @date_number = DateSuggestion.where(date_number: params[:date_number])
    #     render :date_number
    # end

    private

    def date_params
        params.require(:datesuggestion).permit(:id, :location, :date_type, :cost, :date_number)
    end

 
end
