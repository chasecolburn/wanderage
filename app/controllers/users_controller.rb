class UsersController < ApplicationController

  def index 
    render json: User.all
  end

  # def show
  #   @user = User.find(params[:id])
  #   # @user = User.where(name: "Gimpe")

  # end

end
