
class Api::DatesController < ApplicationController
    def index
        @dates = Date.all
        # render "api/dates/"
        render :index
    end

    def show
        @date = Date.find(params[:id])
        # render "api/dates/:id"
        render :show
    end

    def update
        @date = Date.find(params[:id])
        if @date.update(date_params)
            render :show
        else
            render json: @date.errors.full_messages, status: 406
        end
    end

    private

    def date_params
        params.require(:date).permit(:title, :location, :type, :cost, :description)
    end

 
end
