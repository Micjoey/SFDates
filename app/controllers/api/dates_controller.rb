
class Api::DateSuggestionSuggestionController < ApplicationController
    def index
        @dateSuggestions = DateSuggestionSuggestion.all
        # render "api/dateSuggestions/"
        render :index
    end

    def show
        @dateSuggestion = DateSuggestion.find(params[:id])
        # render "api/dateSuggestions/:id"
        render :show
    end

    def update
        @dateSuggestion = DateSuggestion.find(params[:id])
        if @dateSuggestion.update(date_params)
            render :show
        else
            render json: @dateSuggestion.errors.full_messages, status: 406
        end
    end

    private

    def date_params
        params.require(:dateSuggestion).permit(:title, :location, :date_type, :cost, :description)
    end

 
end
